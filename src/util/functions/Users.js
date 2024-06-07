import { db } from '../../../firebase-config';
import { collection, addDoc, getDocs, getDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore';

const addUser = async (companyID, user) => {
    try {
      const docRef = await addDoc(collection(db, "companies", companyID, "users"), user);
      console.log("Document written with ID: ", docRef.id);
      return docRef.id; // Optionally return the new document ID
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const getAllUsers = async (companyID) => {
    const querySnapshot = await getDocs(collection(db, "companies", companyID, "users"));
    const userList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return userList;
  };

  const getUserById = async (companyID, uid) => {
    const userRef = doc(db, "companies", companyID, "users", uid);
    try {
      const docSnap = await getDoc(userRef);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        return { id: docSnap.id, ...docSnap.data() };
      } else {
        console.log("No such document!");
        return null;
      }
    } catch (e) {
      console.error("Error getting document:", e);
    }
  };

  
  const updateUser = async (companyID, uid, updatedUser) => {
    const userRef = doc(db, "companies", companyID, "users", uid);
    try {
      await updateDoc(userRef, updatedUser);
      console.log("Document updated");
    } catch (e) {
      console.error("Error updating document: ", e);
    }
  };

  const deleteUser = async (companyID, uid) => {
    const userRef = doc(db, "companies", companyID, "users", uid);
    try {
      await deleteDoc(userRef);
      console.log("Document deleted");
    } catch (e) {
      console.error("Error deleting document: ", e);
    }
  };

  const getUsersByProjectId = async (companyID, projectID) => {
    const querySnapshot = await getDocs(collection(db, "companies", companyID, "users"));
    const users = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    const filteredUsers = users.filter(user => user.involvedProjectIDs.includes(projectID));
    console.log("Filtered users for project ID", projectID, ":", filteredUsers);
    return filteredUsers;
  };

  const addProjectToUser = async (companyID, projectID, uid) => {
    const userRef = doc(db, "companies", companyID, "users", uid);
    try {
      const userDoc = await getDoc(userRef);
      if (userDoc.exists()) {
        const userData = userDoc.data();
        const involvedProjectIDs = userData.involvedProjectIDs || [];
        if (!involvedProjectIDs.includes(projectID)) {
          involvedProjectIDs.push(projectID);
          await updateDoc(userRef, { involvedProjectIDs });
          console.log(`Project ID ${projectID} added to user ${uid}`);
        } else {
          console.log(`Project ID ${projectID} is already associated with user ${uid}`);
        }
      } else {
        console.log("User document does not exist!");
      }
    } catch (e) {
      console.error("Error updating user with project ID:", e);
    }
  };

  const removeProjectFromUser = async (companyID, uid, projectID) => {
    const userRef = doc(db, "companies", companyID, "users", uid);
    try {
      const userDoc = await getDoc(userRef);
      if (userDoc.exists()) {
        const userData = userDoc.data();
        const involvedProjectIDs = userData.involvedProjectIDs || [];
        const index = involvedProjectIDs.indexOf(projectID);
        if (index > -1) {
          involvedProjectIDs.splice(index, 1);
          await updateDoc(userRef, { involvedProjectIDs });
          console.log(`Project ID ${projectID} removed from user ${uid}`);
        } else {
          console.log(`Project ID ${projectID} is not associated with user ${uid}`);
        }
      } else {
        console.log("User document does not exist!");
      }
    } catch (e) {
      console.error("Error removing project from user:", e);
    }
  };

  const removeProjectFromAllUsers = async (companyID, projectID) => {
    const usersSnapshot = await getDocs(collection(db, "companies", companyID, "users"));
    const users = usersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    const updates = users.map(async (user) => {
      if (user.involvedProjectIDs && user.involvedProjectIDs.includes(projectID)) {
        const updatedProjectIDs = user.involvedProjectIDs.filter(id => id !== projectID);
        const userRef = doc(db, "companies", companyID, "users", user.id);
        await updateDoc(userRef, { involvedProjectIDs: updatedProjectIDs });
        console.log(`Project ID ${projectID} removed from user ${user.id}`);
      }
    });
    await Promise.all(updates);
    console.log("Project removed from all relevant users.");
  };


const createUserObject = ({
    uid,
    companyName,
    companyCode,
    email,
    displayName,
    profileImageUrl,
    mobileNo = '', // Optional with a default value
    role = 'admin', // Default value
    createdAt = new Date(), // Default to current time
    addedItemsID = [],
    scannedItemIDs = [],
    involvedProjectIDs = [],
  }) => {
    return {
      uid,
      companyName,
      companyCode,
      email,
      displayName,
      profileImageUrl,
      mobileNo,
      role,
      createdAt,
      addedItemsID,
      scannedItemIDs,
      involvedProjectIDs,
    };
  };
  
  const newUser = createUserObject({
    uid: "uniqueUserID",
    companyName: "Example Company",
    companyCode: "EX123",
    email: "user@example.com",
    displayName: "John Doe",
    profileImageUrl: "http://example.com/profile.jpg",
    mobileNo: "1234567890",
    role: "admin",
    // Dates and arrays are handled by default values
  });
  
  // To add this new user to Firestore:
  //addUser("companyID", newUser);

export {
  addUser,
  getAllUsers,
  getUserById,
  getUsersByProjectId,
  addProjectToUser,
  removeProjectFromUser,
  removeProjectFromAllUsers,
  updateUser,
  deleteUser,
  createUserObject,
  newUser,
};
  
  