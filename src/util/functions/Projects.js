import { db } from '../../../firebase-config';
import { collection, addDoc, getDocs, getDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore';

// Add project under a specific company
const addProject = async (companyID, project) => {
  try {
    const docRef = await addDoc(collection(db, "companies", companyID, "projects"), project);
    console.log("Document written with ID: ", docRef.id);
    return docRef.id;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

// Get all projects for a specific company
const getAllProjects = async (companyID) => {
  const querySnapshot = await getDocs(collection(db, "companies", companyID, "projects"));
  const projectList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  console.log(projectList);
  return projectList;
};

// Update a specific project under a specific company
const updateProject = async (companyID, projectID, updatedProject) => {
  const projectRef = doc(db, "companies", companyID, "projects", projectID);
  try {
    await updateDoc(projectRef, updatedProject);
    console.log("Document updated");
  } catch (e) {
    console.error("Error updating document: ", e);
  }
};

// Delete a specific project under a specific company
const deleteProject = async (companyID, projectID) => {
  const projectRef = doc(db, "companies", companyID, "projects", projectID);
  try {
    await deleteDoc(projectRef);
    console.log("Document deleted");
  } catch (e) {
    console.error("Error deleting document: ", e);
  }
};

// Function to get a specific project with projectId
const getProject = async (companyID, projectID) => {
  console.log("companyID", companyID);
  console.log("projectID", projectID);
  const projectRef = doc(db, "companies", companyID, "projects", projectID);
  try {
    const docSnap = await getDoc(projectRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      console.log("No such document!");
      return null;
    }
  } catch (e) {
    console.error("Error getting document: ", e);
    return null;
  }
};


const createProjectObject = ({
    objectID, // Ensure this is unique or use Firebase's auto-generated ID
    companyCode,
    name,
    description = "", // Optional, provide default value
    timeCreated = new Date(), // Current time as creation time, or set explicitly
    createdBy,
    startDate,
    endDate,
    location, // This needs to be an object {latitude: Number, longitude: Number}
    address,
    managerName,
    managerID,
    workersUserIDs = [], // Optional, provide default value
    inventoryItemIDs = [], // Optional, provide default value
    imagesUrls = [], // Optional, provide default value
  }) => {
    return {
      objectID,
      companyCode,
      name,
      description,
      timeCreated,
      createdBy,
      startDate,
      endDate,
      location,
      address,
      managerName,
      managerID,
      workersUserIDs,
      inventoryItemIDs,
      imagesUrls,
    };
  };

  const newProject = createProjectObject({
    objectID: "uniqueProjectID",
    companyCode: "COMP123",
    name: "New Project",
    description: "This is a new project.",
    createdBy: "userID",
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-12-31"),
    location: { latitude: 40.416775, longitude: -3.703790 }, // Example location
    address: "Project address here",
    managerName: "Manager Name",
    managerID: "managerID",
    workersUserIDs: ["user1", "user2"],
    inventoryItemIDs: ["item1", "item2"],
    imagesUrls: ["url1", "url2"],
  });

export {
    addProject,
    getAllProjects,
    updateProject,
    deleteProject,
    createProjectObject,
    getProject
}
