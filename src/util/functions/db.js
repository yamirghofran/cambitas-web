import { db } from '../../../firebase-config';
import { collection, addDoc, getDocs, getDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore';


// Projects

// Create Project
async function createProject(companyID, projectData, inventoryItemIDs, workersUserIDs) {
    try {
      // Create a new project document
      const projectRef = await addDoc(collection(db, 'companies', companyID, 'projects'), {
        companyCode: projectData.companyCode,
        name: projectData.name,
        description: projectData.description,
        createdBy: projectData.createdBy,
        startDate: projectData.startDate,
        endDate: projectData.endDate,
        location: projectData.location,
        address: projectData.address,
        managerName: projectData.managerName,
        managerID: projectData.managerID,
        workersUserIDs: workersUserIDs,
        inventoryItemIDs: inventoryItemIDs,
        imagesUrls: projectData.imagesUrls,
      });
  
      // Update inventory items
      for (const itemID of inventoryItemIDs) {
        const itemRef = doc(db, 'companies', companyID, 'inventory', itemID);
        await updateDoc(itemRef, {
          currentLocation: projectData.location,
          currentHolderID: projectData.managerID,
          currentHolderName: projectData.managerName,
          currentHolderProfileImageURL: '', // Add the appropriate URL here
          isAvailable: false,
          projectID: projectRef.id,
          projectName: projectData.name,
        });
      }
  
      // Update users involved
      const updateUserProjects = async (userID) => {
        const userRef = doc(db, 'companies', companyID, 'users', userID);
        const userDoc = await getDoc(userRef);
        const involvedProjectIDs = userDoc.exists ? userDoc.data().involvedProjectIDs : [];
        await updateDoc(userRef, {
          involvedProjectIDs: [...involvedProjectIDs, projectRef.id],
        });
      };

      // Update workers
      for (const userID of workersUserIDs) {
        await updateUserProjects(userID);
      }

      // Update manager
      await updateUserProjects(projectData.managerID);
  
      console.log('Project created successfully');
      return projectRef.id;
    } catch (error) {
      console.error('Error creating project:', error);
      throw error;
    }
  }

// Update Project
async function updateProject(companyID, projectID, updatedData, inventoryItemIDs, workersUserIDs) {
    console.log("companyID", companyID);
    console.log("projectID", projectID);
    console.log("updatedData", updatedData);
    console.log("inventoryItemIDs", inventoryItemIDs);
    console.log("workersUserIDs", workersUserIDs);
try {
    const projectRef = doc(db, 'companies', companyID, 'projects', projectID);

    // Get the existing project data
    const projectDoc = await getDoc(projectRef);
    const existingData = projectDoc.data();

    // Update the project document
    await updateDoc(projectRef, {
    ...updatedData,
    inventoryItemIDs,
    workersUserIDs,
    });

    // Update inventory items
    const existingItemIDs = existingData.inventoryItemIDs || [];
    const removedItemIDs = existingItemIDs.filter(itemID => !inventoryItemIDs.includes(itemID));

    for (const itemID of inventoryItemIDs) {
    const itemRef = doc(db, 'companies', companyID, 'inventory', itemID);
    await updateDoc(itemRef, {
        currentLocation: updatedData.location,
        currentHolderID: updatedData.managerID,
        currentHolderName: updatedData.managerName,
        currentHolderProfileImageURL: '', // Add the appropriate URL here
        isAvailable: false,
        projectID,
        projectName: updatedData.name,
    });
    }

    for (const itemID of removedItemIDs) {
    const itemRef = doc(db, 'companies', companyID, 'inventory', itemID);
    await updateDoc(itemRef, {
        currentLocation: null,
        currentHolderID: null,
        currentHolderName: null,
        currentHolderProfileImageURL: null,
        isAvailable: true,
        projectID: null,
        projectName: null,
    });
    }

    // Update users involved
    const existingWorkerIDs = existingData.workersUserIDs || [];
    const removedWorkerIDs = existingWorkerIDs.filter(userID => !workersUserIDs.includes(userID));

    const updateUserProjects = async (userID, remove = false) => {
    const userRef = doc(db, 'companies', companyID, 'users', userID);
    const userDoc = await getDoc(userRef);
    const involvedProjectIDs = userDoc.exists ? userDoc.data().involvedProjectIDs : [];

    if (remove) {
        const updatedInvolvedProjectIDs = involvedProjectIDs.filter(id => id !== projectID);
        await updateDoc(userRef, {
        involvedProjectIDs: updatedInvolvedProjectIDs,
        });
    } else if (!involvedProjectIDs.includes(projectID)) {
        await updateDoc(userRef, {
        involvedProjectIDs: [...involvedProjectIDs, projectID],
        });
    }
    };

    // Update workers
    for (const userID of workersUserIDs) {
    await updateUserProjects(userID);
    }

    // Remove project from removed workers
    for (const userID of removedWorkerIDs) {
    await updateUserProjects(userID, true);
    }

    // Update manager
    await updateUserProjects(updatedData.managerID);

    console.log('Project updated successfully');
} catch (error) {
    console.error('Error updating project:', error);
    throw error;
}
}

// Delete Project
async function deleteProject(companyID, projectID) {
try {
    const projectRef = doc(db, 'companies', companyID, 'projects', projectID);

    // Get the project data
    const projectDoc = await getDoc(projectRef);
    const projectData = projectDoc.data();

    // Delete the project document
    await deleteDoc(projectRef);

    // Update inventory items
    const inventoryItemIDs = projectData.inventoryItemIDs || [];
    for (const itemID of inventoryItemIDs) {
    const itemRef = doc(db, 'companies', companyID, 'inventory', itemID);
    await updateDoc(itemRef, {
        currentLocation: null,
        currentHolderID: null,
        currentHolderName: null,
        currentHolderProfileImageURL: null,
        isAvailable: true,
        projectID: null,
        projectName: null,
    });
    }

    // Update users involved
    const workersUserIDs = projectData.workersUserIDs || [];
    const managerID = projectData.managerID;

    const updateUserProjects = async (userID) => {
    const userRef = doc(db, 'companies', companyID, 'users', userID);
    const userDoc = await getDoc(userRef);
    const involvedProjectIDs = userDoc.exists ? userDoc.data().involvedProjectIDs : [];
    const updatedInvolvedProjectIDs = involvedProjectIDs.filter(id => id !== projectID);
    await updateDoc(userRef, {
        involvedProjectIDs: updatedInvolvedProjectIDs,
    });
    };

    // Update workers
    for (const userID of workersUserIDs) {
    await updateUserProjects(userID);
    }

    // Update manager
    await updateUserProjects(managerID);

    console.log('Project deleted successfully');
} catch (error) {
    console.error('Error deleting project:', error);
    throw error;
}
}


// Employees

// Add Employee
async function addEmployee(companyID, employeeData) {
    try {
        // Create a new employee document
        const employeeRef = await addDoc(collection(db, 'companies', companyID, 'users'), {
          uid: '', // Placeholder for the UID
          companyID: companyID,
          displayName: employeeData.name,
          email: employeeData.email,
          mobileNo: employeeData.mobileNumber,
          role: employeeData.role,
          profilePicture: employeeData.profilePicture,
        });

        // Update the document with the generated UID
        await updateDoc(employeeRef, {
          uid: employeeRef.id,
        });

        console.log('Employee added successfully');
        return employeeRef.id;
    } catch (error) {
        console.error('Error adding employee:', error);
        throw error;
    }
}

// Delete Employee
async function deleteEmployee(companyID, employeeID) {
    try {
        // Reference to the employee document
        const employeeRef = doc(db, 'companies', companyID, 'users', employeeID);

        // Delete the employee document
        await deleteDoc(employeeRef);

        console.log('Employee deleted successfully');
    } catch (error) {
        console.error('Error deleting employee:', error);
        throw error;
    }
}

// Create Request
async function createRequest(companyID, requestData) {
  try {
    const requestRef = await addDoc(collection(db, 'companies', companyID, 'requests'), {
      requesterID: requestData.requesterID,
      requesterDisplayName: requestData.requesterDisplayName,
      requesterEmail: requestData.requesterEmail,
      requesterProfileImageURL: requestData.requesterProfileImageURL,
      recipientID: requestData.recipientID,
      recipientDisplayName: requestData.recipientDisplayName,
      recipientEmail: requestData.recipientEmail,
      recipientProfileImageURL: requestData.recipientProfileImageURL,
      itemID: requestData.itemID,
      itemName: requestData.itemName,
      itemImageURLs: requestData.itemImageURLs,
      currentProjectID: requestData.currentProjectID,
      currentProjectName: requestData.currentProjectName,
      createdAt: serverTimestamp(),
      requestStatus: 'Request Pending'
    });

    console.log('Request created successfully');
    return requestRef.id;
  } catch (error) {
    console.error('Error creating request:', error);
    throw error;
  }
}



// Read Request
async function getRequest(companyID, requestID) {
  try {
    const requestRef = doc(db, 'companies', companyID, 'requests', requestID);
    const requestDoc = await getDoc(requestRef);

    if (requestDoc.exists()) {
      return { id: requestDoc.id, ...requestDoc.data() };
    } else {
      console.log('No such request!');
      return null;
    }
  } catch (error) {
    console.error('Error getting request:', error);
    throw error;
  }
}

// Update Request
async function updateRequest(companyID, requestID, updatedData) {
  try {
    const requestRef = doc(db, 'companies', companyID, 'requests', requestID);
    await updateDoc(requestRef, updatedData);

    console.log('Request updated successfully');
  } catch (error) {
    console.error('Error updating request:', error);
    throw error;
  }
}

// Delete Request
async function deleteRequest(companyID, requestID) {
  try {
    const requestRef = doc(db, 'companies', companyID, 'requests', requestID);
    await deleteDoc(requestRef);

    console.log('Request deleted successfully');
  } catch (error) {
    console.error('Error deleting request:', error);
    throw error;
  }
}

// Get requests made by a certain user
async function getRequestsByRequester(companyID, requesterID) {
  try {
    const requestsRef = collection(db, 'companies', companyID, 'requests');
    const q = query(requestsRef, where('requesterID', '==', requesterID));
    const querySnapshot = await getDocs(q);

    const requests = [];
    querySnapshot.forEach((doc) => {
      requests.push({ id: doc.id, ...doc.data() });
    });

    return requests;
  } catch (error) {
    console.error('Error getting requests by requester:', error);
    throw error;
  }
}

// Get requests made to a certain user
async function getRequestsToRecipient(companyID, recipientID) {
  try {
    const requestsRef = collection(db, 'companies', companyID, 'requests');
    const q = query(requestsRef, where('recipientID', '==', recipientID));
    const querySnapshot = await getDocs(q);

    const requests = [];
    querySnapshot.forEach((doc) => {
      requests.push({ id: doc.id, ...doc.data() });
    });

    return requests;
  } catch (error) {
    console.error('Error getting requests to recipient:', error);
    throw error;
  }
}

export { createProject, updateProject, deleteProject, addEmployee, deleteEmployee, createRequest, getRequest, updateRequest, deleteRequest }; 