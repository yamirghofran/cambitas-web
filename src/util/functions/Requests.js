import { db } from '../../../firebase';
import { collection, addDoc, getDocs, updateDoc, doc, deleteDoc } from 'firebase/firestore';

const addRequest = async (request) => {
    try {
      const docRef = await addDoc(collection(db, "requests"), request);
      console.log("Document written with ID: ", docRef.id);
      return docRef.id; // Optionally return the new document ID
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const getAllRequests = async () => {
    const querySnapshot = await getDocs(collection(db, "requests"));
    const requestList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return requestList;
  };

  const updateRequest = async (id, updatedRequest) => {
    const requestRef = doc(db, "requests", id);
    try {
      await updateDoc(requestRef, updatedRequest);
      console.log("Document updated");
    } catch (e) {
      console.error("Error updating document: ", e);
    }
  };

  
  const deleteRequest = async (id) => {
    const requestRef = doc(db, "requests", id);
    try {
      await deleteDoc(requestRef);
      console.log("Document deleted");
    } catch (e) {
      console.error("Error deleting document: ", e);
    }
  };
  

const createRequestObject = ({
    objectID,
    requesterID,
    requesterDisplayName,
    requesterEmail,
    requesterProfileImageURL,
    recipientID,
    recipientDisplayName,
    recipientEmail,
    recipientProfileImageURL,
    itemID,
    itemName,
    itemImageURLs,
    currentProjectID,
    currentProjectName,
    createdAt = new Date(), // Set to current date/time by default
    requestStatus = "pending", // Default status
  }) => {
    return {
      objectID,
      requesterID,
      requesterDisplayName,
      requesterEmail,
      requesterProfileImageURL,
      recipientID,
      recipientDisplayName,
      recipientEmail,
      recipientProfileImageURL,
      itemID,
      itemName,
      itemImageURLs,
      currentProjectID,
      currentProjectName,
      createdAt,
      requestStatus, // Ensure this matches one of the defined statuses below
    };
  };

  const RequestStatus = {
    PENDING: "Request Pending",
    APPROVED: "Request Accepted",
    DENIED: "Declined",
    CHECKED_IN: "Item Checked In",
  };
  
  // Example usage:
  const newRequest = createRequestObject({
    objectID: "uniqueRequestID",
    requesterID: "requesterUserID",
    requesterDisplayName: "John Doe",
    requesterEmail: "john.doe@example.com",
    requesterProfileImageURL: "http://example.com/john_doe.jpg",
    recipientID: "recipientUserID",
    recipientDisplayName: "Jane Doe",
    recipientEmail: "jane.doe@example.com",
    recipientProfileImageURL: "http://example.com/jane_doe.jpg",
    itemID: "item123",
    itemName: "Example Item",
    itemImageURLs: ["http://example.com/item.jpg"],
    currentProjectID: "project123",
    currentProjectName: "Example Project",
    requestStatus: RequestStatus.PENDING,
  });
  

  
