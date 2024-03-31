import {useEffect, useState} from "react"
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, setDoc, getDoc, getDocFromCache, query, where, onSnapshot, getDocs, addDoc} from "firebase/firestore";
import { getStorage, listAll, ref, uploadBytes, admin} from "firebase/storage";
// getDocFromCache,
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import { faEarth } from '@fortawesome/free-solid-svg-icons'
import painting from "../All/chinese.jpg"
import userLogo from "../All/birdPic.jpg"
import artBackground from "../All/bakerRose.jpg"
import rose from "../All/OIP.jpg"
import bam1 from "../All/bamboo_PNG68.png"
import bam2 from "../All/bamboo_PNG68.png" 
import pug from "../All/pugO.jpg"
import roundBtnBack from "../All/Location_dot_black.svg.png"
import label from "../All/playBD.jpg"
import iceCaps from "../All/icecaps.jpg"
import Slider from "./slider"
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from "react-router-dom";
import ReactPlayer from 'react-player'
// import song from "../All/Future - Too Much Sauce ft Lil Uzi Vert.mp3"
// import song2 from "../All/Dave Baxter - Whispers (official video).mp3"
import "../Music.scss"


function Home() {
  
  const [cap, setCap]= useState([])
  const firebaseConfig = {
    apiKey: "AIzaSyBu1TYokdfUvihyDOnCgyuNfeL5ad2l6k4",
    authDomain: "musicop-5a26a.firebaseapp.com",
    projectId: "musicop-5a26a",
    storageBucket: "musicop-5a26a.appspot.com",
    messagingSenderId: "799623392984",
    appId: "1:799623392984:web:5aa1de20c2cec6c490b1ad"
  };
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  
  
  // USED in Slice and board ----------------------->
  const storage = getStorage()
  const listRef = ref(storage, "dark/static/media")
  // -----------------------------
  let cold = ""
  


  // const frame = async ()=>{
  //   const db = getFirestore(app);
  //   const bucket = getStorage().bucket("dark/static/media")
  //   try {
  //     const docRef = await addDoc(collection(db, "AlbumPH", "Album"), {
  //       first: "Ada",
  //       last: "Lovelace",
  //       born: 1815
  //     });
  //     console.log("Document written with ID: ", docRef.id);
  //   } catch (e) {
  //     console.error("Error adding document: ", e);
  //   }
  // }


  // Letter is to be used--------------------------------------
    let cape = "";
    const letter = async ()=>{
      try {
        const db = getFirestore(app);
  
        const q = doc(db, "AlbumPH", "08f2ebd2-576f-49f1-8a3c-4e85294028e2")
  
        const ref = collection(db, "AlbumPH")
        const quy = query(ref)
        onSnapshot(quy, (snapshot)=>{
          let music = []
          snapshot.docs.forEach((doc)=>{
            music.push({...doc.data(), id: doc.id})
          })
        })
        // const document = await getDocFromCache(colRef);
        console.log("marker")
        const snapshot = await getDoc(q)
        
        setCap("Mello Summer (Oganized. By Kalvin)")

        if (snapshot.exists()) {
            console.log(snapshot.data().Name) 
          // console.log(snapshot.data().Name);
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.log(error)
      }
    }
    letter()
 
  
  console.log(cap)

  
  // Used function slice() (No clearing)-----------------------------------

  
  // function slice(){
  //   const firebaseConfig = {
  //     apiKey: "AIzaSyBu1TYokdfUvihyDOnCgyuNfeL5ad2l6k4",
  //     authDomain: "musicop-5a26a.firebaseapp.com",
  //     projectId: "musicop-5a26a",
  //     storageBucket: "musicop-5a26a.appspot.com",
  //     messagingSenderId: "799623392984",
  //     appId: "1:799623392984:web:5aa1de20c2cec6c490b1ad"
  //   };
  //   const app = initializeApp(firebaseConfig);
  //   const db = getFirestore(app);
  //   const docRef = collection(db, "AlbumPH", ).doc("Album");
  //   listAll(listRef).then((res)=>{res.items.forEach((itemRef)=>{
  //     // setDoc(doc(docRef),{
  //     //   songID: uuidv4(),
  //     //   songTitle: itemRef.name
  //     // }) 
  //     console.log(listRef)
  //   })})
    
    
  // }
  // slice()
  //----------------------------------------------

  //Use function bandcat() ------------------------------------------------------------------------------------ 
  async function bandcat(){

    const media = {}

    const covers =[]

    const album = []

    const collation = new Set()

    const storage = getStorage();

    const listRef = ref(storage, 'dark/static/media');
    // Find all the prefixes and items.
    listAll(listRef)
      .then((res) => {
        res.items.forEach((itemRef) => {
          media[itemRef] = itemRef
          album.push([itemRef.name, itemRef.fullPath])
          collation.add(itemRef.name, itemRef.fullPath)
          // console.log(itemRef.name)
        });
        console.log("album:"+ album[0])
      }).catch((error) => { 
        console.log(`Error with bandcat ${error}`)
      });
      
    return album[0]
  }
  bandcat()

  // async function timeStamp(){
  //   const firebaseConfig = {
  //     apiKey: "AIzaSyBu1TYokdfUvihyDOnCgyuNfeL5ad2l6k4",
  //     authDomain: "musicop-5a26a.firebaseapp.com",
  //     projectId: "musicop-5a26a",
  //     storageBucket: "musicop-5a26a.appspot.com",
  //     messagingSenderId: "799623392984",
  //     appId: "1:799623392984:web:5aa1de20c2cec6c490b1ad"
  //   };
  //   const db = getFirestore(app);
  
  //   const refr = collection(db, "Album")
  //   const querySnapshot = await getDocs(refr)
  //   const Album = new Set()
  //   const music = []
  //   let list = new Set();
  //   querySnapshot.forEach((value)=>{
  //     console.log(...value.data())
  //     Album.add({...value.data(), id:value.id})
  //     // music.push(value.data())
  //   })
  //   // onSnapshot(quy, (snapshot)=>{
  //   //   snapshot.docs.forEach((doc)=>{
  //   //     // Put all array elements in a map
  //   //     // for (let i = 0; i < music.length; i++){
  //   //     //   list.add(music.forEach((val, index)=>{
  //   //     //     return music.indexOf(val) === index;
  //   //     //   }));
          
  //   //     // }  
  //   //     // function onlyUnique(value, index, array) {
  //   //       //   return array.indexOf(value) === index;
  //   //       // }
  //   //       // var setItems = music.filter(onlyUnique)
  //   //       // console.log(setItems)
          
  //   //   })
      
  //   // })
  //   console.log(Album)
  //   console.log(list)

    
  // }
  // timeStamp()


  
  // board is used for below function is not to be Erased --------------------------------------------------------



  const board =  async()=>{
    try{
      function dice(){
        const firebaseConfig = {
          apiKey: "AIzaSyBu1TYokdfUvihyDOnCgyuNfeL5ad2l6k4",
          authDomain: "musicop-5a26a.firebaseapp.com",
          projectId: "musicop-5a26a",
          storageBucket: "musicop-5a26a.appspot.com",
          messagingSenderId: "799623392984",
          appId: "1:799623392984:web:5aa1de20c2cec6c490b1ad"
        };
        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);
        const colRef = collection(db, "AlbumPH");
        
        listAll(listRef).then((res)=>{res.items.forEach((itemRef)=>{
          const q = ()=>{
            return doc(db, "AlbumPH", uuidv4())
          }
           
          setDoc(q(colRef), {
            userID: uuidv4(),
            Name: itemRef.name,
          });
           
        })})
        // Use to set in document Album
        const storage = getStorage(); 
        const storageRef = ref(storage);
      } 
      dice()
    }catch (err){
      // console.log(err)
    }
    
  }

  board() 

  // --------------------------------------------




  // User unique setting ---------------------------------------------------------------------------------
  useEffect(()=>{
    const user = localStorage.getItem("userID");
    if(!user){
      localStorage.setItem("userID", uuidv4)
      function dice(){
        const firebaseConfig = {
          apiKey: "AIzaSyBu1TYokdfUvihyDOnCgyuNfeL5ad2l6k4",
          authDomain: "musicop-5a26a.firebaseapp.com",
          projectId: "musicop-5a26a",
          storageBucket: "musicop-5a26a.appspot.com",
          messagingSenderId: "799623392984",
          appId: "1:799623392984:web:5aa1de20c2cec6c490b1ad"
        };
        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);
        const colRef = collection(db, "MusicBase");
        setDoc(doc(colRef), {
          userID: uuidv4(),
          Name: "unNamedUser", saved: ["n/a"], album: ["no album"],
          likes: "", record: "unMarked",
        });
      }
      console.log("data saved")
      dice()
    }else{
      console.log("user has recured no data saved")
    }
  }, [])

  // const album = useEffect(()=>{

  //   const board =  async()=>{
  //     try{
  //       function dice(){
  //         let collection = [];
  //         const firebaseConfig = {
  //           apiKey: "AIzaSyBu1TYokdfUvihyDOnCgyuNfeL5ad2l6k4",
  //           authDomain: "musicop-5a26a.firebaseapp.com",
  //           projectId: "musicop-5a26a",
  //           storageBucket: "musicop-5a26a.appspot.com",
  //           messagingSenderId: "799623392984",
  //           appId: "1:799623392984:web:5aa1de20c2cec6c490b1ad"
  //         };
  //         const app = initializeApp(firebaseConfig);
  //         const db = getFirestore(app);
  //         const album = collection(db, "AlbumBase");
  //         const albumCol = getDocFromCache(album)
  //         albumCol.doc.foreach(docum =>{
  //           collection.push({...docum.data()})
  //         })
  //       } 
  //       dice()
  
  //     }catch (err){
  //       console.log(err)
  //     }
  //     // const getDB =  await function getDB(){
  //     //   const docRef = doc(db, "MusicBase");
  //     //   const document = getDocFromCache(docRef);
  //     //   console.log(document)
    
  //     // }
  //     // getDB()
  //   }

  //   board() 
  // })

  

  const navigate = useNavigate()
  let playVideo = true
  return (
    <div className='protector'>
        <img className="frameImage" src={painting}  alt=""></img>
        <div className="hero"><img src={pug} alt="" onClick={()=>{if(!playVideo){playVideo = true}else{playVideo= false}}}/></div>
        
            {/* <div className="IconBorder"><FontAwesomeIcon icon={faBookmark} /></div> */}
        <div className="artRose" ><img src={iceCaps} alt=""/></div>
        <div className="art" ><img src={bam1} alt=""/></div>
        <div className="art2" ><img src={bam2} alt=""/></div>
        <div className="classTitle">{cap}</div>
        <div className="classTitleBlack">{cap}</div>
        {/* <div className="backer"><img src={roundBtnBack} alt=""/></div> */}
        <div className="playlist"><FontAwesomeIcon icon={faBookmark}  className='fa-solid fa-bookmark'/></div>
        
        <Slider listOfSongs = {[bandcat()].fullPath}/>
        <div className="tile">|</div>
        <div className="tileEnd">|</div>
        <div className="AlbumCover" src="PA">
            <img src={label} alt=""/>
        </div>
    </div>
  )
}

export default Home