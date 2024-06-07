import { db } from '../../../firebase';
import { collection, addDoc, getDocs, updateDoc, doc, deleteDoc } from 'firebase/firestore';

const addScan = async (scan) => {
    try {
      const docRef = await addDoc(collection(db, "scans"), scan);
      console.log("Document written with ID: ", docRef.id);
      return docRef.id; // Optionally return the new document ID
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  
  

const createScanObject = ({
    objectID,
    itemName,
    itemID,
    itemCategoryID,
    userID,
    serialID = '', // Optional
    location, // Assume an object { latitude, longitude }
    timeScanned = new Date(),
    projectID,
    projectName,
    projectLocation, // Assume an object { latitude, longitude }
  }) => {
    return {
      objectID,
      itemName,
      itemID,
      itemCategoryID,
      userID,
      serialID,
      location,
      timeScanned,
      projectID,
      projectName,
      projectLocation,
    };
  };
  