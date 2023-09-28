import { Fragment, useState } from "react";
import "./profiles.css";

const ProfileData = [
  {
    profileImage: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    profileName: "Hemanth sai",
    designation: "Software Developer",
  },
  {
    profileImage: "https://cdn-icons-png.flaticon.com/512/3135/3135823.png",
    profileName: "Kalyani",
    designation: "Doctor",
  },
  {
    profileImage: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    profileName: "Deepak",
    designation: "Engineer",
  },
  {
    profileImage: "https://cdn-icons-png.flaticon.com/512/3135/3135823.png",
    profileName: "Yesesvi",
    designation: "Student",
  },
  {
    profileImage: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    profileName: "Yewshwant",
    designation: "Advocate",
  },
  {
    profileImage: "https://cdn-icons-png.flaticon.com/512/3135/3135823.png",
    profileName: "Sesa Sai",
    designation: "Student",
  },
  {
    profileImage: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    profileName: "Samuel",
    designation: "Scientist",
  },
  {
    profileImage: "https://cdn-icons-png.flaticon.com/512/3135/3135823.png",
    profileName: "Nikhitha",
    designation: "Software Developer",
  },
];
function Profiles() {
  const [profileName, setProfileName] = useState(""); // holds value of Profile Name
  const [desgination, setDesignation] = useState(""); // holds value of Designation
  const [profileImage, setProfileImage] = useState(""); // holds value of profile Image
  const [profileDataState, setProfileDataState] = useState(ProfileData);
  const [editIndex, setEditIndex] = useState(-1);
  const [searchInp, setSearchInp] = useState(""); // holds value of Search Input
  const [Error,SetError]=useState({profileName:"",Designation:"",profileImage:""})

  const handleChangeProfileName = (e) => {
    setProfileName(e.target.value); // setting the Profile Name state
  };
  const handleChangeDesignation = (e) => {
    setDesignation(e.target.value); // setting the Profile Name state
  };
  const handleChangeProfileImage = (e) => {
    setProfileImage(e.target.value); // setting the Profile Name state
  };


        const onsubmit2 = ()=>{

      


            const newErr = {

              profileName: profileName===''?"please provide name":"",
              Designation: desgination===''?"please provide designation": "",
              profileImage: profileImage===''?"please provide image":""

            }

            SetError(newErr)


            if(profileName.length && profileImage.length && desgination.length){
              
              setProfileDataState({...profileDataState,
                profileName,
                profileImage,
                desgination
              })
            }

        }

  const onSubmit = () => {
    

    if (profileName.length && profileImage.length && desgination.length) {
      if (editIndex !== -1) {
        // //update /edit
        // let tempProfileDataState = profileDataState; // array of all prof
        // let tempProf =  tempProfileDataState[editIndex] // user trying to edit prof
        // // updating old values with new values
        // tempProf.profileName = profileName;
        // tempProf.designation = desgination;
        // tempProf.profileImage = profileImage;

        // tempProfileDataState = tempProfileDataState.map((prof, pIndex) => {
        //   // prof - json
        //   if (editIndex === pIndex) {
        //     return tempProf;
        //   }
        //   return prof;
        // });

        // setProfileDataState(tempProfileDataState);
        setProfileDataState(() => {
          return profileDataState.map((prof, pInd) => {
            if (editIndex === pInd) {
              prof.profileName = profileName;
              prof.profileImage = profileImage;
              prof.designation = desgination;
              return prof;
            } else {
              return prof;
            }
          });
        });
        setEditIndex(-1);
      } else {
        // create/add
        setProfileDataState([
          ...profileDataState,
          {
            profileName: profileName,
            designation: desgination,
            profileImage: profileImage,
          },
        ]);
      }
      // Error.profile=='hello'
     

      setProfileName("");
      setDesignation("");
      setProfileImage("");
    } else {
      alert("please complete the form");
      SetError('please enter the profile name')
    }
  };
  const editProfile = (pIndex) => {
    setProfileName(profileDataState[pIndex].profileName);
    setDesignation(profileDataState[pIndex].designation);
    setProfileImage(profileDataState[pIndex].profileImage);
    setEditIndex(pIndex);
  };
  const deleteProfile = (pIndex) => {
    // let deleteArr = profileDataState;
    // let deepak = deleteArr.filter((element, index) => {
    //   return pIndex !== index;
    // });
    // setProfileDataState(deepak);
    setProfileDataState(() => {
      return profileDataState.filter((elem, index) => {
        return pIndex !== index;
      });
    });
  };
  const onSearch = (e) => {
    setSearchInp(e.target.value);
    if (e.target.value === "") {
      setProfileDataState(ProfileData);
    } else {
      let tempProfileDataState = profileDataState;
      // let profileNameMatchingArr = tempProfileDataState.filter(
      //   (elem, index) => {
      //     return elem.profileName.toLocaleLowerCase().includes(e.target.value);
      //   }
      // );
      // setProfileDataState(profileNameMatchingArr);

      let profileNameMatchingArr = tempProfileDataState.filter(
     (elem , index) => {
      return (
        elem.designation.toLocaleLowerCase().includes(e.target.value) ||
        elem.profileName.toLocaleLowerCase().includes(e.target.value))
     }
      );
      setProfileDataState(profileNameMatchingArr);
     }
   
  };
  return (
    <div className="rootDivContainer">
      <div className="formMaintainer">
        <h2>Add Profile</h2>
        <div className="formContainer">
          <div>
            <label>Profile Name*</label>
            <div style={{ display: "grid" }}>
              <input
                name="ProfileName"
                value={profileName}
                onChange={(e) => {
                  handleChangeProfileName(e);
                }}
              />
              {
                // ! not / negation
                // cond rendering -> tertiary operator / &&
              Error.profileName&&<span>{Error.profileName}</span> 
              }
            </div>
          </div>
          <div>
            <label>Designation*</label>
            <div style={{ display: "grid" }}>
              <input
                name="Designation"
                value={desgination}
                onChange={(e) => {
                  handleChangeDesignation(e);
                }}
              />
             {
              
              Error.Designation&&<span>{Error.Designation}</span> 
             }
            </div>
          </div>
          <div>
            <label>Profile Image*</label>
            <div style={{ display: "grid" }}>
              <input
                name="ProfileImage"
                value={profileImage}
                onChange={(e) => {
                  handleChangeProfileImage(e);
                }}
              />
                {
              
              Error.profileImage&&<span>{Error.profileImage}</span> 
             }
            </div>
          </div>
        </div>
        <button style={{ justifySelf: "end" }} onClick={onsubmit2}>
          {editIndex !== -1 ? "EDIT" : "Submit"}
        </button>
      </div>
      <h2>Search Profile</h2>
      <div className="formMaintainer">
        <div className="formContainer">
          <div>
            <label>Search</label>
            <div style={{ display: "grid" }}>
              <input
                onChange={onSearch}
                value={searchInp}
                style={{ width: "100%" }}
                name="Search"
                placeholder="Search by Profile Name or Designation"
              />
            </div>
          </div>
        </div>
        {/* <button style={{ justifySelf: "end" }} onClick={onSubmit}>
          {"Search"}
        </button> */}
      </div>
      <h2>Profiles</h2>
      <div className="rootContainer">
        {profileDataState.map((profile, index) => {
          return (
            <Fragment key={index}>
              <div className="card">
                <img
                  title={profile.profileName}
                  src={profile.profileImage}
                  alt="Avatar"
                  style={{ width: "100%" }}
                />
                <div className="container">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <p style={{ fontWeight: "bold" }}>{profile.profileName}</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <p>{profile.designation}</p>
                  </div>
                  <div className="iconContainer">
                    <img
                      onClick={() => editProfile(index)}
                      title="EDIT"
                      alt="edit"
                      className="imager"
                      src="https://cdn.pixabay.com/photo/2017/06/06/00/33/edit-icon-2375785_1280.png"
                    />
                    <img
                      onClick={() => {
                        deleteProfile(index);
                      }}
                      title="DELETE"
                      alt="delete"
                      className="imager"
                      src="https://cdn-icons-png.flaticon.com/512/3687/3687412.png"
                    />
                  </div>
                </div>
              </div>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default Profiles;

