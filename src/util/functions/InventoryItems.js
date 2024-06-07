import { db } from '../../../firebase-config';
import { collection, addDoc, getDocs, getDoc, updateDoc, doc, deleteDoc, query, where } from 'firebase/firestore';

const addInventoryItem = async (companyID, projectID, inventoryItem) => {
  try {
    const docRef = await addDoc(collection(db, "companies", companyID, "projects", projectID, "inventory"), inventoryItem);
    console.log("Document written with ID: ", docRef.id);
    return docRef.id; // Optionally return the new document ID
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

const getAllCompanyInventoryItems = async (companyID) => {
  const querySnapshot = await getDocs(collection(db, "companies", companyID, "inventory"));
  console.log(querySnapshot)
  const itemList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  console.log(itemList)
  return itemList;
};


const updateInventoryItem = async (companyID, projectID, itemID, updatedInventoryItem) => {
  const itemRef = doc(db, "companies", companyID, "projects", projectID, "inventory", itemID);
  try {
    await updateDoc(itemRef, updatedInventoryItem);
    console.log("Document updated");
  } catch (e) {
    console.error("Error updating document: ", e);
  }
};

const deleteInventoryItem = async (companyID, projectID, itemID) => {
  const itemRef = doc(db, "companies", companyID, "projects", projectID, "inventory", itemID);
  try {
    await deleteDoc(itemRef);
    console.log("Document deleted");
  } catch (e) {
    console.error("Error deleting document: ", e);
  }
};

const getInventoryItem = async (companyID, itemID) => {
  const itemRef = doc(db, "companies", companyID, "inventory", itemID);
  try {
    const docSnap = await getDoc(itemRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      console.log("No such document!");
      return null;
    }
  } catch (e) {
    console.error("Error getting document: ", e);
  }
};

const getProjectInventoryItems = async (companyID, projectID) => {
  const inventoryCollectionRef = collection(db, "companies", companyID, "inventory");
  const q = query(inventoryCollectionRef, where("projectID", "==", projectID));
  const querySnapshot = await getDocs(q);
  const itemList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  console.log("Inventory items for project:", itemList);
  return itemList;
};

const assignProjectToInventoryItem = async (companyID, projectID, itemID) => {
  const itemRef = doc(db, "companies", companyID, "inventory", itemID);
  try {
    const docSnap = await getDoc(itemRef);
    if (docSnap.exists()) {
      const itemData = docSnap.data();
      if (itemData.projectID || !itemData.isAvailable) {
        throw new Error(`Inventory item ${itemID} is in use by another project or is not available.`);
      }
      await updateDoc(itemRef, { projectID, isAvailable: false });
      console.log(`Inventory item ${itemID} assigned to project ${projectID}`);
    } else {
      console.log("No such inventory item exists.");
    }
  } catch (e) {
    console.error("Error assigning project to inventory item: ", e);
  }
};

const removeProjectFromInventoryItem = async (companyID, itemID) => {
  const itemRef = doc(db, "companies", companyID, "inventory", itemID);
  try {
    await updateDoc(itemRef, {
      projectID: null,
      currentHolderID: null,
      currentHolderName: null,
      currentHolderProfileImageURL: null,
      currentLocation: { latitude: null, longitude: null },
      isAvailable: true
    });
    console.log(`Project removed from inventory item ${itemID}`);
  } catch (e) {
    console.error("Error removing project from inventory item: ", e);
  }
};

const removeProjectFromAllInventoryItems = async (companyID, projectID) => {
  const inventoryCollectionRef = collection(db, "companies", companyID, "inventory");
  const q = query(inventoryCollectionRef, where("projectID", "==", projectID));
  const querySnapshot = await getDocs(q);
  const updates = querySnapshot.docs.map(async (doc) => {
    const itemRef = doc.ref;
    await updateDoc(itemRef, {
      projectID: null,
      currentHolderID: null,
      currentHolderName: null,
      currentHolderProfileImageURL: null,
      currentLocation: { latitude: null, longitude: null },
      isAvailable: true
    });
    console.log(`Project ID ${projectID} removed from inventory item ${doc.id}`);
  });
  await Promise.all(updates);
  console.log("Project removed from all inventory items.");
};





const createInventoryItemObject = ({
    objectID,
    itemType,
    name,
    nameTrimmed,
    additionalInfo,
    categoryID,
    currentLocation, // Assume this to be an object { latitude, longitude }
    currentHolderID,
    currentHolderName,
    currentHolderProfileImageURL,
    dateAdded = new Date(),
    isAvailable = true,
    isExpired = false,
    uploadedBy,
    imagesUrls = [],
    projectID,
    projectName,
    materialSpecifics = null, // Optional, provide default or null
    toolSpecifics = null, // Optional, provide default or null
  }) => {
    return {
      objectID,
      itemType, // This should be a string representing the item type
      name,
      nameTrimmed,
      additionalInfo,
      categoryID,
      currentLocation,
      currentHolderID,
      currentHolderName,
      currentHolderProfileImageURL,
      dateAdded,
      isAvailable,
      isExpired,
      uploadedBy,
      imagesUrls,
      projectID,
      projectName,
      materialSpecifics,
      toolSpecifics,
    };
  };
  
export {
  addInventoryItem,
  getAllCompanyInventoryItems,
  getProjectInventoryItems,
  assignProjectToInventoryItem,
  removeProjectFromInventoryItem,
  removeProjectFromAllInventoryItems,
  updateInventoryItem,
  deleteInventoryItem,
  createInventoryItemObject
}
