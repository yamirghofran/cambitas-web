import { db } from '../../../firebase';
import { collection, addDoc, getDocs, updateDoc, doc, deleteDoc } from 'firebase/firestore';

const addCompany = async (company) => {
    try {
      const docRef = await addDoc(collection(db, "companies"), company);
      console.log("Document written with ID: ", docRef.id);
      return docRef.id; // Optionally return the new document ID
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const getAllCompanies = async () => {
    const querySnapshot = await getDocs(collection(db, "companies"));
    const companyList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return companyList;
  };

  const updateCompany = async (companyCode, updatedCompany) => {
    const companyRef = doc(db, "companies", companyCode); // Assuming companyCode is unique and used as doc ID
    try {
      await updateDoc(companyRef, updatedCompany);
      console.log("Document updated");
    } catch (e) {
      console.error("Error updating document: ", e);
    }
  };

  const deleteCompany = async (companyCode) => {
    const companyRef = doc(db, "companies", companyCode); // Assuming companyCode is unique and used as doc ID
    try {
      await deleteDoc(companyRef);
      console.log("Document deleted");
    } catch (e) {
      console.error("Error deleting document: ", e);
    }
  };
  



const createCompanyObject = ({
    companyName,
    companyCode,
    companyImageUrl = '', // Optional with default value
    createdAt = new Date(), // Defaults to current time, set explicitly if needed
    websiteUrl = '', // Optional with default value
    address = '', // Optional with default value
  }) => {
    return {
      companyName,
      companyCode,
      companyImageUrl,
      createdAt,
      websiteUrl,
      address,
    };
  };
  
  const newCompany = createCompanyObject({
    companyName: "Example Company",
    companyCode: "EX123",
    companyImageUrl: "http://example.com/logo.png",
    websiteUrl: "http://example.com",
    address: "123 Example St, City, Country",
  });
  
  // To add this new company to Firestore:
  //addCompany(newCompany);
  