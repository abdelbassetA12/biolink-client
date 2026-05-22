
import axios from 'axios';
import { useState, useEffect } from 'react';
import API_BASE from "../config/api";
import { useNavigate } from 'react-router-dom';
import { socialPlatforms } from '../components/socialPlatforms';
import ThemeRenderer from '../components/ThemeRenderer';
 import LoadingScreen from "../components/LoadingScreen";
import { useAuth } from '../context/AuthContext';
import { extractYouTubeId } from '../utils/youtube';

import toast from "react-hot-toast";

import {
  DndContext,
  closestCenter
} from "@dnd-kit/core";
import { FaThumbtack, FaWhatsapp } from "react-icons/fa";
 import {  } from 'react-icons/fa';

import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
  arrayMove
} from "@dnd-kit/sortable";

import { CSS } from "@dnd-kit/utilities";


import {
  FiMoreVertical,
  FiImage,
  FiStar,
  FiBell,
  FiCalendar,
  FiLock,
  FiTrash2,
  FiExternalLink,
  FiEdit,
  FiMove,
 
   FiX
} from "react-icons/fi";


import { FaExternalLinkAlt, FaUserCircle, FaLink, FaPlus, FaSave, FaTrash } from "react-icons/fa";
axios.defaults.withCredentials = true;

function SortableItem({ id, children }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.6 : 1,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes}>
      {children(listeners)} 
    </div>
  );
}

export default function Dashboard() {
  const { user, setUser, loading } = useAuth();
  const navigate = useNavigate();

  const [profile, setProfile] = useState({ bio: '', username: '', avatar: '' });
  const [link, setLink] = useState({ 
  title: '',
  type: 'select',
  content: {
    url: '',
    videoUrl: '',
    phone: '',
    message: '',
    formFields: [],
    productUrl: ''

    
  }
});
const [formFields, setFormFields] = useState([]);
 
  const [social, setSocial] = useState({ platform: '', url: '', active: true });
  const [links, setLinks] = useState([]);
  const [socialIcons, setSocialIcons] = useState([]);


 
const [showSocialModal, setShowSocialModal] = useState(false);
const [socialMode, setSocialMode] = useState(null); 

const [showDiv, setShowDiv] = useState(false); // state لتتبع الظهور
const [type, setType] = useState("link");


const addField = () => {
  setFormFields([
    ...formFields,
    {
      label: "",
      type: "text",
      required: false,
      placeholder: ""
    }
  ]);
};

function SkeletonBox({ width, height }) {
  return (
    <div style={{
      width,
      height,
      background: "#e5e7eb",
      borderRadius: 6,
      marginBottom: 8
    }} />
  );
}

useEffect(() => {
  if (!user) return;

  setProfile({
    username: user.username,
    bio: user.bio,
    avatar: user.avatar,
   
  });

  fetchUserData(user.username);
}, [user]);

  const fetchUserData = async (username) => {
    try {
      const res = await axios.get(`${API_BASE}/api/profile/${username}`);
      setLinks(res.data.links || []);
      setSocialIcons(res.data.user.socialIcons || []);
    } catch (err) {
      console.error(err);
    }
  };



  const handleFile = async (e) => {
  const file = e.target.files[0];
  const formData = new FormData();
  formData.append('avatar', file);
  formData.append('username', user.username);

  try {
    const res = await axios.post(
      `${API_BASE}/api/profile/upload-avatar`,
      formData
    );

    
    setProfile(prev => ({
  ...prev,
  avatar: res.data.imageUrl
}));

setUser(prev => ({
  ...prev,
  avatar: res.data.imageUrl
}));
    console.log("avatar:", res.data.imageUrl);

  } catch (err) {
    
    toast.error("Upload failed");
  }
};
/*
  const saveProfile = async () => {

  if (!user) return;

  try {

    const res = await axios.post(
      `${API_BASE}/api/profile/update`,
      {
        newUsername: profile.username,
        bio: profile.bio,
        avatar: profile.avatar,
        theme: profile.theme
      },
      {
        withCredentials: true
      }
    );

    setUser(res.data);

    localStorage.setItem(
      'user',
      JSON.stringify(res.data)
    );

    toast.success("Profile updated!");

  } catch (err) {

    console.log(err.response?.data);

    toast.error(
      err.response?.data?.error ||
      "Error saving profile"
    );

  }

};*/

  const saveProfile = async () => {
    if (!user) return;
    try {
      const res = await axios.post(`${API_BASE}/api/profile/update`, {
      oldUsername: user.username, // الاسم القديم
      newUsername: profile.username, // الاسم الجديد
     
        //username: user.username,
        ...profile
      });
      setUser(res.data);
      localStorage.setItem('user', JSON.stringify(res.data));
   
      toast.success("Profile updated!");
    } catch (err) {
     
      toast.error("Error saving profile");
    }
  };

const addLink = async () => {
  if (!user || !link.title) {
    return toast.error('Title required');
  }

  // ✅ تحقق حسب النوع
  if (link.type === 'link' && !link.content.url) {
    return toast.error('URL required');
  }

  if (link.type === 'video' && !link.content.videoUrl) {
    return toast.error('Video URL required');
  }

  if (link.type === 'whatsapp' && !link.content.phone) {
    return toast.error('Phone required');
  }
  if (link.type === 'youtube' && !link.content.youtubeUrl) {
  return toast.error('YouTube URL required');
}
if (link.type === 'product' && !link.content.productUrl) {
  return toast.error('Product URL required');
}

 

  try {
    await axios.post(`${API_BASE}/api/profile/add-link`, {
      username: user.username,
      title: link.title,
      type: link.type,
      content: {
    ...link.content,
    formFields: link.type === "form" ? formFields : undefined
  },
     // content: link.content,
      active: true
    });

    // ✅ reset
    /*
    setLink({
      title: '',
      type: 'link',
     
      content: {
        url: '',
        videoUrl: '',
        
        phone: '',
        message: '',
       
      }
    });
    */
    setLink({
  title: '',
  type: 'link',
  content: {
    url: '',
    videoUrl: '',
    youtubeUrl: '',
    youtubeMode: 'open',
    phone: '',
    message: '',
    productUrl: '',
    productDisplay: 'card',
    formFields: []
  }
});
setFormFields([]);

    fetchUserData(user.username);

    toast.success('Link added');

  } catch (err) {
    toast.error('Error adding link');
  }
};


 const updateLink = async (l) => {
  try {
    await axios.post(`${API_BASE}/api/profile/update-link`, {
      linkId: l._id,
      title: l.title,
      active: l.active,
      content: l.content
    });

    fetchUserData(user.username);
  } catch (err) {
    toast.error("Error updating link");
  }
};

  const deleteLink = async (id) => {
    try {
      await axios.post(`${API_BASE}/api/profile/delete-link`, { linkId: id });
      setLinks(links.filter(l => l._id !== id));
    } catch (err) {
   
      toast.error("Error deleting link");
    }
  };
 
 const addSocial = async () => {
    if (!user || !social.platform || !social.url) return alert('Platform and URL required');
    try {
      await axios.post(`${API_BASE}/api/profile/add-social`, {
        username: user.username,
        ...social
      });
      setSocial({ platform: '', url: '', active: true });
      fetchUserData(user.username);
    } catch (err) {
   
      toast.error("Error adding social icon");
    }
  };
  

  const updateSocial = async (index, s) => {
    try {
      await axios.post(`${API_BASE}/api/profile/update-social`, {
        username: user.username,
        index,
        ...s
      });
      fetchUserData(user.username);
    } catch (err) {
  
      toast.error("Error updating social icon");
    }
  };

  const deleteSocial = async (index) => {
    try {
      await axios.post(`${API_BASE}/api/profile/delete-social`, {
        username: user.username,
        index
      });
      setSocialIcons(socialIcons.filter((_, i) => i !== index));
    } catch (err) {
     
      toast.error("Error deleting social icon");
    }
  };
useEffect(() => {
  if (!loading && !user) {
    navigate('/');
  }
}, [user, loading]);
 //if (loading) return <div>Loading...</div>;


 const togglePin = async (l) => {
  try {
    await axios.post(
      `${API_BASE}/api/profile/pin-link`,
      {
        linkId: l._id,
        pinned: !l.pinned
      }
    );

    fetchUserData(user.username);
  } catch (err) {
    console.error(err);
  }
};


const updateOrder = async (newLinks) => {
  try {
    await axios.post(`${API_BASE}/api/profile/reorder-links`, {
      links: newLinks.map((l, index) => ({
        id: l._id,
        order: index
      }))
    });
  } catch (err) {
    console.error(err);
  }
};
const moveUp = (index) => {
  if (index === 0) return;

  const newLinks = [...links];
  [newLinks[index - 1], newLinks[index]] =
    [newLinks[index], newLinks[index - 1]];

  setLinks(newLinks);
  updateOrder(newLinks); // 🔥 مهم
};

const moveDown = (index) => {
  if (index === links.length - 1) return;

  const newLinks = [...links];
  [newLinks[index + 1], newLinks[index]] =
    [newLinks[index], newLinks[index + 1]];

  setLinks(newLinks);
  updateOrder(newLinks); // 🔥 مهم
};


if (loading) return <LoadingScreen />;

if (!user) return null;



 












  const cardHover = { transform: 'translateY(-3px)' };


 
  return (
    <div className='dashboard'>

   

      {/* LEFT PANEL */}
      <div className="lift-panel custom-scroll" >
       
       

   {/* PROFILE */}
<div className='card'>    

{/* HEADER */}
<div className="profile-header">

  <h3 className="profile-title">
    <FaUserCircle /> Profile
  </h3>

  {/* EDIT BUTTON */}
  <div
    onClick={() => setShowDiv(!showDiv)}
    className="profile-edit-btn"
  >
    {showDiv ? <FiX size={16} /> : <FiEdit size={16} />}
  </div>

</div>

{/* USER INFO */}
<div className="profile-user-info">

  <img
    src={user.avatar || '...'}
    alt="avatar"
    className="profile-avatar"
  />

  <div>
    <p className="profile-user-name">
      {user.username}
    </p>

    <p className="profile-user-bio">
      {user.bio}
    </p>
  </div>

</div>

{/* EDIT FORM */}
{showDiv && (
  <div className="profile-edit-form">

    <input
      className='input'
      placeholder="Username"
      value={profile.username}
      onChange={e => setProfile({ ...profile, username: e.target.value })}
    />

    <input
      className='input'
      placeholder="Bio"
      value={profile.bio}
      onChange={e => setProfile({ ...profile, bio: e.target.value })}
    />

    <input type="file" onChange={handleFile} />

    <button className="custom-btn btn-purple"  onClick={saveProfile}>
      <FaSave /> Save
    </button>

  </div>
)}

{/* SOCIAL SECTION */}
<div className="social-section">

  {/* ICONS */}
  <div className="social-icons-list">

    {socialIcons.map((s, i) => {
      const IconComp = socialPlatforms.find(p => p.name === s.platform)?.icon;

      return (
        <div key={i} className="social-icon-box">
          {IconComp && <IconComp size={18} color="#4F46E5" />}
        </div>
      );
    })}

  </div>

  {/* ACTIONS */}
  <div className="social-actions">

    {/* ADD */}
    <div
      onClick={() => {
        setSocialMode('add');
        setShowSocialModal(true);
      }}
      className="icon-action-btn"
    >
      <FaPlus size={14} />
    </div>

    {/* EDIT */}
    <div
      onClick={() => {
        setSocialMode('edit');
        setShowSocialModal(true);
      }}
      className="icon-action-btn"
    >
      <FiEdit size={16} />
    </div>



   

  </div>

</div>









{/* MODAL */}
{showSocialModal && (
  <div className="social-modal-overlay">

    {/* EDIT */}
    {socialMode === 'edit' && (
      <div className="social-card custom-scroll">

        <h3 className="social-title">
          <FaLink />
          Edit Social Links
        </h3>

        {socialIcons.map((s, i) => (

          <div key={i} className="social-row">

            {/* PLATFORM */}
            <div className="social-select-wrapper">

              <div
                className="social-select"
                onClick={() => {

                  const updated = socialIcons.map((x, j) =>
                    j === i
                      ? { ...x, open: !x.open }
                      : { ...x, open: false }
                  );

                  setSocialIcons(updated);

                }}
              >

                <div className="social-selected">

                  {(() => {

                    const platform = socialPlatforms.find(
                      p => p.name === s.platform
                    );

                    const Icon = platform?.icon;

                    return (
                      <>
                        {Icon && <Icon size={18} />}
                        <span>
                          {platform?.label || 'Select Platform'}
                        </span>
                      </>
                    );

                  })()}

                </div>

              </div>

              {/* DROPDOWN */}
              {s.open && (

                <div className="social-dropdown custom-scroll">

                  {socialPlatforms.map((p) => {

                    const Icon = p.icon;

                    return (

                      <div
                        key={p.name}
                        className="social-option"
                        onClick={() => {

                          const updated = socialIcons.map((x, j) =>
                            j === i
                              ? {
                                  ...x,
                                  platform: p.name,
                                  open: false
                                }
                              : x
                          );

                          setSocialIcons(updated);

                        }}
                      >

                        <Icon size={18} />

                        <span>
                          {p.label}
                        </span>

                      </div>

                    );

                  })}

                </div>

              )}

            </div>

            {/* URL */}
            <input
              className="social-input"
              placeholder="https://example.com"
              value={s.url}
              onChange={(e) => {

                const updated = socialIcons.map((x, j) =>
                  j === i
                    ? {
                        ...x,
                        url: e.target.value
                      }
                    : x
                );

                setSocialIcons(updated);

              }}
            />
             {/* TOGGLE */}
<div className="social-toggle">

  <label className="toggle-wrapper">

    <input
      type="checkbox"
      className="toggle-input"
      checked={!!s.active}
      onChange={(e) => {

        const updated = [...socialIcons];

        updated[i] = {
          ...updated[i],
          active: e.target.checked
        };

        setSocialIcons(updated);

      }}
    />

    <div className={`toggle-bg ${s.active ? 'active' : ''}`}>

      <div
        className={`toggle-circle ${s.active ? 'active' : ''}`}
      />

    </div>

  </label>

</div>
            

            {/* SAVE */}
            <button
              className="social-save-btn"
              onClick={() => updateSocial(i, s)}
            >

              <FaSave />

              <span>Save</span>

            </button>

            {/* DELETE */}
            <button
              className="social-delete-btn"
              onClick={() => deleteSocial(i)}
            >

              <FaTrash />

              <span>Delete</span>

            </button>

          </div>

        ))}

        {/* FOOTER */}
        <div className="social-footer">

          <button
            className="social-cancel-btn"
            onClick={() => setShowSocialModal(false)}
          >

            Cancel

          </button>

        </div>

      </div>
    )}

    {/* ADD */}
    {socialMode === 'add' && (

      <div className="social-card">

        <h3 className="social-title">
          <FaPlus />
          Add Social Link
        </h3>

        {/* PLATFORM */}
        <div className="form-field-box">

          <label className="checkbox-label">
            Platform
          </label>

          <select
            className="input-social"
            value={social.platform}
            onChange={(e) =>
              setSocial({
                ...social,
                platform: e.target.value
              })
            }
          >

            <option value="">
              Select Platform
            </option>

            {socialPlatforms.map((p) => (

              <option
                key={p.name}
                value={p.name}
              >
                {p.label}
              </option>

            ))}

          </select>

        </div>

        {/* URL */}
        <div className="form-field-box">

          <label className="checkbox-label">
            URL
          </label>

          <input
            className="input"
            placeholder="https://example.com"
            value={social.url}
            onChange={(e) =>
              setSocial({
                ...social,
                url: e.target.value
              })
            }
          />

        </div>

        {/* ACTIVE */}
        <div className="form-field-box">

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '12px'
            }}
          >

            <span className="checkbox-label">
              Active
            </span>

            <label className="toggle-wrapper">

              <input
                type="checkbox"
                className="toggle-input"
                checked={social.active}
                onChange={(e) =>
                  setSocial({
                    ...social,
                    active: e.target.checked
                  })
                }
              />

              <div
                className={`toggle-bg ${social.active ? 'active' : ''}`}
              >

                <div
                  className={`toggle-circle ${social.active ? 'active' : ''}`}
                />

              </div>

            </label>

          </div>

        </div>

        {/* BUTTONS */}
        <div
          className="modal-buttons-row"
          style={{
            display: 'flex',
            gap: '12px',
            marginTop: '20px',
            flexWrap: 'wrap'
          }}
        >

          <button
            className="custom-btn btn-green"
            onClick={addSocial}
          >

            <FaPlus />

            <span>Add</span>

          </button>

          <button
            className="custom-btn btn-gray"
            onClick={() => setShowSocialModal(false)}
          >

            Cancel

          </button>

        </div>

      </div>

    )}

  </div>
)}

























    </div>


      
     



      





















       

  <div className='card'>
  <h3 className='title-collection'>
    <FaPlus /> Add New collection
  </h3>

 
    <div className="flex-column-gap">

   <div className="select-wrapper">
  <select
    value={link.type}
    onChange={(e) =>
      setLink({
        ...link,
        type: e.target.value
      })
    }
    className="link-type-select"
  >
    <option value="select">✨ Add New Collection</option>
  

    <option value="link">
      🔗 Normal Link
    </option>

    <option value="video">
      🎥 Video
    </option>

    <option value="whatsapp">
      💬 WhatsApp
    </option>

    <option value="youtube">
      ▶️ YouTube
    </option>

    <option value="form">
      📝 Form
    </option>

    <option value="product">
      🛍 Product
    </option>
  </select>
</div>
  

{/* NORMAL LINK */}
{link.type === 'select' && (
  <>
    
<p>select method</p>
    
  </>
)}

{/* NORMAL LINK */}
{link.type === 'link' && (
  <>
    {/* TITLE */}
    <div className="input-box">
      <FaLink className="input-icon" />
      <input
        placeholder="Enter link title..."
        value={link.title}
        onChange={(e) => setLink({ ...link, title: e.target.value })}
        className="custom-input"
      />
    </div>

    {/* URL */}
    <div className="input-box">
      <FaExternalLinkAlt className="input-icon" />

      <input
        placeholder="https://your-link.com"
        value={link.content.url}
        onChange={(e) =>
          setLink({
            ...link,
            content: {
              ...link.content,
              url: e.target.value
            }
          })
        }
        className="custom-input"
      />
    </div>
  </>
)}

{/* VIDEO */}
{link.type === 'video' && (
  <>
    {/* TITLE */}
    <div className="input-box">
      <FaLink className="input-icon" />
      <input
        placeholder="Enter link title..."
        value={link.title}
        onChange={(e) => setLink({ ...link, title: e.target.value })}
        className="custom-input"
      />
    </div>

    {/* VIDEO URL */}
    <div className="input-box">
      <FaExternalLinkAlt className="input-icon" />

      <input
        placeholder="YouTube URL"
        value={link.content.videoUrl}
        onChange={(e) =>
          setLink({
            ...link,
            content: {
              ...link.content,
              videoUrl: e.target.value
            }
          })
        }
        className="custom-input"
      />
    </div>
  </>
)}

{/* WHATSAPP */}
{link.type === 'whatsapp' && (
  <>
    {/* TITLE */}
    <div className="input-box">
      <FaLink className="input-icon" />
      <input
        placeholder="Enter link title..."
        value={link.title}
        onChange={(e) => setLink({ ...link, title: e.target.value })}
        className="custom-input"
      />
    </div>

    {/* PHONE */}
    <div className="input-box">
      <input
        placeholder="Phone (212...)"
        value={link.content.phone}
        onChange={(e) =>
          setLink({
            ...link,
            content: {
              ...link.content,
              phone: e.target.value
            }
          })
        }
        className="custom-input"
      />
    </div>

    {/* MESSAGE */}
    <div className="input-box">
      <input
        placeholder="Message"
        value={link.content.message}
        onChange={(e) =>
          setLink({
            ...link,
            content: {
              ...link.content,
              message: e.target.value
            }
          })
        }
        className="custom-input"
      />
    </div>
  </>
)}

{/* YOUTUBE */}
{link.type === 'youtube' && (
  <>
    {/* TITLE */}
    <div className="input-box">
      <input
        placeholder="Title"
        value={link.title}
        onChange={(e) => setLink({ ...link, title: e.target.value })}
        className="custom-input"
      />
    </div>

    {/* URL */}
    <div className="input-box">
      <input
        placeholder="YouTube URL"
        value={link.content.youtubeUrl}
        onChange={(e) =>
          setLink({
            ...link,
            content: {
              ...link.content,
              youtubeUrl: e.target.value
            }
          })
        }
        className="custom-input"
      />
    </div>

    {/* MODE */}
    <div className="input-box">
      <select
        value={link.content.youtubeMode}
        onChange={(e) =>
          setLink({
            ...link,
            content: {
              ...link.content,
              youtubeMode: e.target.value
            }
          })
        }
        className="custom-select"
      >
        <option value="open">Open in YouTube</option>
        <option value="embed">Embed Video</option>
        <option value="channel">Visit Channel</option>
      </select>
    </div>
  </>
)}

{/* FORM */}
{link.type === "form" && (
  <>
    {/* TITLE */}
    <div className="input-box">
      <input
        placeholder="Title"
        value={link.title}
        onChange={(e) => setLink({ ...link, title: e.target.value })}
        className="custom-input"
      />
    </div>

    <button onClick={addField} className="add-btn">
      + Add Field
    </button>

    {formFields.map((f, i) => (
      <div key={i} className="form-field-box">
        <input
          placeholder="Label"
          value={f.label}
          onChange={(e) => {
            const updated = [...formFields];
            updated[i].label = e.target.value;
            setFormFields(updated);
          }}
          className="custom-input"
        />

        <select
          value={f.type}
          onChange={(e) => {
            const updated = [...formFields];
            updated[i].type = e.target.value;
            setFormFields(updated);
          }}
          className="custom-select"
        >
          <option value="text">Text</option>
          <option value="email">Email</option>
          <option value="textarea">Textarea</option>
        </select>

        <input
          placeholder="Placeholder"
          value={f.placeholder}
          onChange={(e) => {
            const updated = [...formFields];
            updated[i].placeholder = e.target.value;
            setFormFields(updated);
          }}
          className="custom-input"
        />

        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={f.required}
            onChange={(e) => {
              const updated = [...formFields];
              updated[i].required = e.target.checked;
              setFormFields(updated);
            }}
          />
          Required
        </label>
      </div>
    ))}
  </>
)}

{/* PRODUCT */}
{link.type === "product" && (
  <>
    {/* TITLE */}
    <div className="input-box">
      <input
        placeholder="Title"
        value={link.title}
        onChange={(e) => setLink({ ...link, title: e.target.value })}
        className="custom-input"
      />
    </div>

    {/* PRODUCT URL */}
    <div className="input-box">
      <input
        placeholder="Product URL"
        value={link.content.productUrl || ""}
        onChange={(e) =>
          setLink({
            ...link,
            content: {
              ...link.content,
              productUrl: e.target.value
            }
          })
        }
        className="custom-input"
      />
    </div>

    {/* DISPLAY MODE */}
    <div className="input-box">
      <select
        value={link.content.productDisplay || "card"}
        onChange={(e) =>
          setLink({
            ...link,
            content: {
              ...link.content,
              productDisplay: e.target.value
            }
          })
        }
        className="custom-select"
      >
        <option value="card">Card (Preview Style)</option>
        <option value="link">Simple Link</option>
      </select>
    </div>
  </>
)}














   
    {/* ACTIONS */}
<div className="actions-wrapper">

  {/* YOUTUBE PREVIEW */}
  {link.content.youtubeUrl && (
    <iframe
      width="100%"
      height="220"
      src={`https://www.youtube.com/embed/${
        extractYouTubeId(link.content.youtubeUrl)
      }`}
      frameBorder="0"
      allowFullScreen
      className="youtube-preview"
    />
  )}

  {/* PREVIEW LINK */}
  {link.content.url && (
    <a
      href={link.content.url}
      target="_blank"
      rel="noreferrer"
      className="preview-url"
    >
      Preview
    </a>
  )}

  {/* ADD BUTTON */}
  {link.type !== 'select' && (
    <button
      onClick={addLink}
      className="add-link-btn"
    >
      <FaPlus /> Add Link
    </button>
  )}

</div>
    
  </div>
</div>




{/* LINKS LIST */}
<div className='card'>

  <h3 className="links-list-title">
    <FaLink /> My Links
  </h3>

  {/* 👇 DND START */}
  <DndContext
    collisionDetection={closestCenter}
    onDragEnd={(event) => {
      const { active, over } = event;
      if (!over || active.id === over.id) return;

      const oldIndex = links.findIndex(l => l._id === active.id);
      const newIndex = links.findIndex(l => l._id === over.id);

      const newLinks = arrayMove(links, oldIndex, newIndex);
      setLinks(newLinks);
      updateOrder(newLinks);
    }}
  >
    <SortableContext
      items={links.map(l => l._id)}
      strategy={verticalListSortingStrategy}
    >

      {links.map((l) => (
        <SortableItem key={l._id} id={l._id}>
          {(listeners) => (

            <div className="link-item-card">

              {/* LEFT */}
              <div className="link-item-left">

                <input
                  value={l.title}
                  onChange={(e) => {
                    const updated = links.map(x =>
                      x._id === l._id ? { ...x, title: e.target.value } : x
                    );
                    setLinks(updated);
                  }}
                  onBlur={() => updateLink(l)}
                 // style={inputTitle}
                  className='input-title'
                />

                {/* 🔗 NORMAL LINK */}
                {l.type === "link" && (
                  <input
                    value={l.content?.url || ""}
                    onChange={(e) => {
                      const updated = links.map(x =>
                        x._id === l._id
                          ? { ...x, content: { ...x.content, url: e.target.value } }
                          : x
                      );
                      setLinks(updated);
                    }}
                    onBlur={() => updateLink(l)}
                    //style={inputUrl}
                    className='input-url'
                  />
                )}

                {/* 🎥 VIDEO */}
                {l.type === "video" && (
                  <input
                    value={l.content?.videoUrl || ""}
                    onChange={(e) => {
                      const updated = links.map(x =>
                        x._id === l._id
                          ? { ...x, content: { ...x.content, videoUrl: e.target.value } }
                          : x
                      );
                      setLinks(updated);
                    }}
                    onBlur={() => updateLink(l)}
                    //style={inputUrl}
                    className='input-url'
                  />
                )}

                {/* 💬 WHATSAPP */}
                {l.type === "whatsapp" && (
                  <>
                    <input
                      placeholder="Phone"
                      value={l.content?.phone || ""}
                      onChange={(e) => {
                        const updated = links.map(x =>
                          x._id === l._id
                            ? { ...x, content: { ...x.content, phone: e.target.value } }
                            : x
                        );
                        setLinks(updated);
                      }}
                      //style={inputUrl}
                      className='input-url'
                    />

                    <input
                      placeholder="Message"
                      value={l.content?.message || ""}
                      onChange={(e) => {
                        const updated = links.map(x =>
                          x._id === l._id
                            ? { ...x, content: { ...x.content, message: e.target.value } }
                            : x
                        );
                        setLinks(updated);
                      }}
                      onBlur={() => updateLink(l)}
                      //style={inputUrl}
                      className='input-url'
                    />
                  </>
                )}

                {l.type === "youtube" && (
                  <>
                    <input
                      value={l.content?.youtubeUrl || ""}
                      onChange={(e) => {
                        const updated = links.map(x =>
                          x._id === l._id
                            ? {
                                ...x,
                                content: {
                                  ...x.content,
                                  youtubeUrl: e.target.value
                                }
                              }
                            : x
                        );

                        setLinks(updated);
                      }}
                      onBlur={() => updateLink(l)}
                      //style={inputUrl}
                      className='input-url'
                    />

                    <select
                      value={l.content?.youtubeMode || "open"}
                      onChange={(e) => {
                        const updated = links.map(x =>
                          x._id === l._id
                            ? {
                                ...x,
                                content: {
                                  ...x.content,
                                  youtubeMode: e.target.value
                                }
                              }
                            : x
                        );

                        setLinks(updated);
                      }}
                      onBlur={() => updateLink(l)}
                      //style={inputUrl}
                      className='input-url'
                    >
                      <option value="open">Open</option>
                      <option value="embed">Embed</option>
                      <option value="channel">Channel</option>
                    </select>
                  </>
                )}

                {l.type === "form" && (
                  <div className="form-fields-wrapper">

                    {(l.content?.formFields || []).map((field, idx) => (
                      <div
                        key={idx}
                        className="single-form-field"
                      >

                        {/* LABEL */}
                        <input
                          placeholder="Label"
                          value={field.label}
                          onChange={(e) => {

                            const updated = links.map(x =>
                              x._id === l._id
                                ? {
                                    ...x,
                                    content: {
                                      ...x.content,
                                      formFields: x.content.formFields.map((f, i) =>
                                        i === idx
                                          ? { ...f, label: e.target.value }
                                          : f
                                      )
                                    }
                                  }
                                : x
                            );

                            setLinks(updated);

                          }}
                          onBlur={() => updateLink(l)}
                          //style={inputUrl}
                          className='input-url'
                        />

                        {/* PLACEHOLDER */}
                        <input
                          placeholder="Placeholder"
                          value={field.placeholder}
                          onChange={(e) => {

                            const updated = links.map(x =>
                              x._id === l._id
                                ? {
                                    ...x,
                                    content: {
                                      ...x.content,
                                      formFields: x.content.formFields.map((f, i) =>
                                        i === idx
                                          ? { ...f, placeholder: e.target.value }
                                          : f
                                      )
                                    }
                                  }
                                : x
                            );

                            setLinks(updated);

                          }}
                          onBlur={() => updateLink(l)}
                          //style={inputUrl}
                          className='input-url'
                        />

                        {/* TYPE */}
                        <select
                          value={field.type}
                          onChange={(e) => {

                            const updated = links.map(x =>
                              x._id === l._id
                                ? {
                                    ...x,
                                    content: {
                                      ...x.content,
                                      formFields: x.content.formFields.map((f, i) =>
                                        i === idx
                                          ? { ...f, type: e.target.value }
                                          : f
                                      )
                                    }
                                  }
                                : x
                            );

                            setLinks(updated);

                          }}
                          onBlur={() => updateLink(l)}
                          //style={inputUrl}
                          className='input-url'
                        >
                          <option value="text">Text</option>
                          <option value="email">Email</option>
                          <option value="textarea">Textarea</option>
                        </select>

                        {/* REQUIRED */}
                        <label className="required-label">
                          <input
                            type="checkbox"
                            checked={field.required}
                            onChange={(e) => {

                              const updated = links.map(x =>
                                x._id === l._id
                                  ? {
                                      ...x,
                                      content: {
                                        ...x.content,
                                        formFields: x.content.formFields.map((f, i) =>
                                          i === idx
                                            ? { ...f, required: e.target.checked }
                                            : f
                                        )
                                      }
                                    }
                                  : x
                              );

                              setLinks(updated);

                            }}
                            onBlur={() => updateLink(l)}
                          />

                          Required
                        </label>

                      </div>
                    ))}

                  </div>
                )}

                {l.type === "product" && (
                  <>
                    <input
                      placeholder="Product URL"
                      value={l.content?.productUrl || ""}
                      onChange={(e) => {
                        const updated = links.map(x =>
                          x._id === l._id
                            ? {
                                ...x,
                                content: {
                                  ...x.content,
                                  productUrl: e.target.value
                                }
                              }
                            : x
                        );

                        setLinks(updated);
                      }}
                      onBlur={() => updateLink(l)}
                      //style={inputUrl}
                      className='input-url'
                    />

                    <select
                      value={l.content?.productDisplay || "card"}
                      onChange={(e) => {
                        const updated = links.map(x =>
                          x._id === l._id
                            ? {
                                ...x,
                                content: {
                                  ...x.content,
                                  productDisplay: e.target.value
                                }
                              }
                            : x
                        );

                        setLinks(updated);
                      }}
                      onBlur={() => updateLink(l)}
                      //style={inputUrl}
                      className='input-url'
                    >
                      <option value="card">Card</option>
                      <option value="link">Link</option>
                    </select>

                    {l.content?.productData?.image && (
                      <div className="product-preview-box"></div>
                    )}
                  </>
                )}

                <div className='icon-row '>
                  <FiImage  className='icon' />
                  <FiStar  className='icon' />
                  <FiBell  className='icon' />
                  <FiCalendar  className='icon'/>
                  <FiLock className='icon' />
                  <FiMoreVertical 
                  //style={icon} 
                  className='icon' />

                  <FaThumbtack
                    onClick={() => togglePin(l)}
                    className='icon'
                    style={{
                     // ...icon,
                      cursor: "pointer",
                      color: l.pinned ? "#f59e0b" : "#9ca3af"
                    }}
                  />

                  <span style={{ fontSize: 12 }}>
                    {l.clicks || 0} clicks
                  </span>
                </div>

              </div>

              {/* RIGHT */}
              <div className="link-item-right">

                <FiExternalLink  className='icon' />

                {/* DRAG HANDLE ONLY */}
                <FiMove
                  className="drag-handle"
                  {...listeners}
                />

                {/* TOGGLE */}
                <label className="toggle-wrapper">

                  <input
                    type="checkbox"
                    checked={l.active}
                    onChange={(e) => {
                      const updated = links.map(x =>
                        x._id === l._id ? { ...x, active: e.target.checked } : x
                      );
                      setLinks(updated);
                      updateLink({ ...l, active: e.target.checked });
                    }}
                    className="toggle-input"
                  />

                  {/* BACKGROUND */}
                  <div className={`toggle-bg ${l.active ? "active" : ""}`}>

                    {/* CIRCLE */}
                    <div className={`toggle-circle ${l.active ? "active" : ""}`} />

                  </div>
                </label>

                <FiTrash2
                  onClick={() => deleteLink(l._id)}
                 
                className='icon'
                />

              </div>

            </div>

          )}
        </SortableItem>
      ))}

    </SortableContext>
  </DndContext>

  {/* 👆 DND END */}
</div>

 
       

        






      </div>




     
      {/* PREVIEW */}
<div className="preview-wrapper">
  
  <a
    href={`/u/${user.username}`}
    target="_blank"
    className="preview-link"
  >
    View My Page <FaExternalLinkAlt />
  </a>

  <div className="custom-scroll preview-phone">
    <ThemeRenderer
      user={{ ...user, ...profile, socialIcons }}
      links={links}
    />
  </div>

</div>
<style>
  {`
  
.dashboard{
  display:flex;
  height:100vh;
  background:linear-gradient(135deg,#eef2ff,#f8fafc);
  font-family:'Inter',sans-serif;
  color:#1f2937;
}

/* =========================
   SCROLLBAR
========================= */

.custom-scroll{
  scrollbar-width:thin;
  scrollbar-color:#6366f1 transparent;
}

.custom-scroll::-webkit-scrollbar{
  width:8px;
}

.custom-scroll::-webkit-scrollbar-track{
  background:transparent;
}

.custom-scroll::-webkit-scrollbar-thumb{
  background:linear-gradient(180deg,#6366f1,#4f46e5);
  border-radius:20px;
}

.custom-scroll::-webkit-scrollbar-thumb:hover{
  background:linear-gradient(180deg,#4f46e5,#4338ca);
}

/* =========================
   GLOBAL
========================= */

*{
  box-sizing:border-box;
}

input:focus,
select:focus,
textarea:focus{
  outline:none;
  border-color:#6366f1;
  box-shadow:0 0 0 4px rgba(99,102,241,0.12);
}

button{
  transition:0.25s ease;
}

button:hover{
  opacity:0.96;
}

img{
  max-width:100%;
}

/* =========================
   LEFT PANEL
========================= */

.lift-panel{
  flex:1;
  padding:24px;
  overflow-y:auto;
  width:100%;
}

/* =========================
   CARD
========================= */

.card{
  background:#fff;
  border-radius:24px;
  padding:24px;
  margin-bottom:24px;

  border:1px solid #eef2f7;

  box-shadow:
    0 10px 30px rgba(0,0,0,0.05);
}

/* =========================
   INPUTS
========================= */

.input,
.custom-input,
.custom-select,
.input-social,
.social-input,
.input-title,
.input-url{
  width:100%;
  min-width:0;
}

.input,
.input-social{
  padding:14px 16px;
  border-radius:16px;
  border:1px solid #d1d5db;
  margin-bottom:12px;
  font-size:14px;
  transition:0.2s;
  background:white;
}

.input-social option{
  color:#000;
}

/* =========================
   PROFILE
========================= */

.profile-header{
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:14px;
  margin-bottom:22px;
}

.profile-title{
  display:flex;
  align-items:center;
  gap:10px;
}

.profile-edit-btn{
  width:42px;
  height:42px;

  border-radius:14px;
  background:#f3f4f6;

  display:flex;
  align-items:center;
  justify-content:center;

  cursor:pointer;

  color:#6b7280;
  border:1px solid #e5e7eb;
}

.profile-edit-btn:hover{
  background:#6366f1;
  color:#fff;
}

.profile-user-info{
  display:flex;
  align-items:center;
  gap:18px;
  margin-bottom:24px;
}

.profile-avatar{
  width:78px;
  height:78px;

  border-radius:50%;
  object-fit:cover;

  border:3px solid #6366f1;
}

.profile-user-name{
  font-weight:700;
  font-size:18px;
}

.profile-user-bio{
  color:#6b7280;
  font-size:14px;
  line-height:1.6;
}

.profile-edit-form{
  padding:20px;
  background:#EEF2FF;
  border-radius:18px;
  margin-bottom:25px;
}

/* =========================
   SOCIAL SECTION
========================= */

.social-section{
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:16px;
  flex-wrap:wrap;
}

.social-icons-list{
  display:flex;
  gap:12px;
  flex-wrap:wrap;
}

.social-icon-box{
  width:48px;
  height:48px;

  border-radius:50%;
  background:#EEF2FF;

  display:flex;
  justify-content:center;
  align-items:center;

  border:1px solid #dbeafe;
}

.social-actions{
  display:flex;
  gap:10px;
}

.icon-action-btn{
  width:42px;
  height:42px;

  border-radius:14px;
  background:#f3f4f6;

  display:flex;
  align-items:center;
  justify-content:center;

  cursor:pointer;
  color:#6b7280;

  border:1px solid #e5e7eb;
}

.icon-action-btn:hover{
  background:#6366f1;
  color:#fff;
}

/* =========================
   MODAL
========================= */

.social-modal-overlay{
  position:fixed;
  inset:0;

  background:rgba(15,23,42,0.6);
  backdrop-filter:blur(8px);

  display:flex;
  justify-content:center;
  align-items:center;

  padding:20px;
  z-index:999;
}

.social-card{
  width:100%;
  max-width:950px;

  max-height:92vh;
  overflow-y:auto;

  background:#fff;
  border-radius:28px;
  padding:28px;

  box-shadow:
    0 25px 60px rgba(0,0,0,0.18);
}

.social-title{
  display:flex;
  align-items:center;
  gap:10px;

  margin-bottom:24px;

  font-size:22px;
  font-weight:700;
}

/* =========================
   SOCIAL ROW NEW UI
========================= */

.social-row{
  display:grid;

  grid-template-columns:
    minmax(180px,220px)
    minmax(0,1fr)
    auto
    auto
    auto;

  gap:14px;

  align-items:center;

  padding:18px;
  margin-bottom:16px;

  background:#f8fafc;

  border:1px solid #e5e7eb;
  border-radius:22px;

  transition:0.25s ease;
}

.social-row:hover{
  border-color:#c7d2fe;

  box-shadow:
    0 10px 30px rgba(99,102,241,0.08);

  transform:translateY(-2px);
}

/* =========================
   SELECT
========================= */

.social-select-wrapper{
  position:relative;
  width:100%;
  min-width:0;
}

.social-select{
  width:100%;

  display:flex;
  align-items:center;
  justify-content:space-between;

  cursor:pointer;

  padding:14px 16px;

  border:1px solid #dbe2ea;
  border-radius:16px;

  background:#fff;

  transition:0.2s;
}

.social-select:hover{
  border-color:#6366f1;
}

.social-selected{
  display:flex;
  align-items:center;
  gap:10px;

  font-weight:500;
  color:#111827;

  overflow:hidden;
}

.social-selected span{
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
}

/* =========================
   DROPDOWN
========================= */

.social-dropdown{
  position:absolute;
  top:calc(100% + 8px);
  left:0;
  right:0;

  background:#fff;

  border:1px solid #e5e7eb;
  border-radius:18px;

  overflow:hidden;

  z-index:100;

  box-shadow:
    0 18px 40px rgba(0,0,0,0.08);
}

.social-option{
  padding:14px 16px;

  display:flex;
  align-items:center;
  gap:12px;

  cursor:pointer;

  transition:0.2s;
}

.social-option:hover{
  background:#eef2ff;
  color:#4f46e5;
}

/* =========================
   INPUT
========================= */

.social-input{
  width:100%;

  padding:14px 16px;

  background:#fff;

  border:1px solid #dbe2ea;
  border-radius:16px;

  font-size:14px;

  transition:0.2s;
}

.social-input:focus{
  border-color:#6366f1;

  box-shadow:
    0 0 0 4px rgba(99,102,241,0.12);
}



/* =========================================================
   TOGGLE
========================================================= */

.social-toggle{
  display:flex;
  align-items:center;
  justify-content:center;

  width:100%;
  min-width:60px;
}

.toggle-wrapper{
  position:relative;

  width:54px;
  height:30px;

  cursor:pointer;

  flex-shrink:0;

  display:flex;
  align-items:center;
  justify-content:center;
}

.toggle-input{
  position:absolute;

  opacity:0;

  width:0;
  height:0;
}

.toggle-bg{
  position:relative;

  width:54px;
  height:30px;

  border-radius:999px;

  background:#d1d5db;

  transition:
    background 0.25s ease,
    box-shadow 0.25s ease;
}

.toggle-bg.active{
  background:
    linear-gradient(
      135deg,
      #6366f1,
      #4f46e5
    );

  box-shadow:
    0 4px 14px rgba(99,102,241,0.35);
}

.toggle-circle{
  position:absolute;

  top:4px;
  left:4px;

  width:22px;
  height:22px;

  border-radius:50%;

  background:#fff;

  transition:
    transform 0.25s ease;

  box-shadow:
    0 4px 10px rgba(0,0,0,0.18);
}

.toggle-circle.active{
  transform:translateX(24px);
}


/* =========================
   BUTTONS
========================= */

.social-save-btn,
.social-delete-btn{
  height:50px;

  padding:0 18px;

  border:none;
  border-radius:16px;

  display:flex;
  align-items:center;
  justify-content:center;
  gap:8px;

  font-size:14px;
  font-weight:600;

  cursor:pointer;

  white-space:nowrap;

  transition:0.25s ease;
}

.social-save-btn{
  background:linear-gradient(135deg,#6366f1,#4f46e5);
  color:white;
}

.social-save-btn:hover{
  transform:translateY(-2px);

  box-shadow:
    0 10px 24px rgba(79,70,229,0.25);
}

.social-delete-btn{
  background:#fff;
  color:#ef4444;

  border:1px solid #fecaca;
}

.social-delete-btn:hover{
  background:#ef4444;
  color:white;
}

.social-footer{
  display:flex;
  justify-content:flex-end;
  margin-top:20px;
}

.social-cancel-btn{
  background:#6B7280;
  color:white;

  border:none;
  padding:12px 18px;
  border-radius:14px;

  cursor:pointer;

  font-weight:600;
}

/* =========================
   BUTTONS GLOBAL
========================= */

.custom-btn{
  padding:12px 18px;
  border-radius:14px;
  border:none;

  color:white;
  cursor:pointer;

  font-size:14px;
  font-weight:600;

  display:flex;
  align-items:center;
  justify-content:center;
  gap:6px;
}

.btn-purple{
  background:#4F46E5;
}

.btn-green{
  background:#10B981;
}

.btn-blue{
  background:#3B82F6;
}

.btn-red{
  background:#EF4444;
}

.btn-gray{
  background:#6B7280;
}

/* =========================
   COLLECTION
========================= */

.title-collection{
  margin-bottom:18px;

  display:flex;
  align-items:center;
  gap:8px;
}

.flex-column-gap{
  display:flex;
  flex-direction:column;
  gap:12px;
}

/* =========================
   SELECT
========================= */

.select-wrapper{
  position:relative;
  width:100%;
  margin-bottom:18px;
}

.link-type-select{
  width:100%;

  padding:14px 16px;

  border:1px solid #e5e7eb;
  border-radius:16px;

  background:#fff;
  color:#111827;

  font-size:15px;
  font-weight:500;

  outline:none;
  cursor:pointer;

  transition:all 0.2s ease;

  appearance:none;

  box-shadow:0 4px 14px rgba(0,0,0,0.04);
}

.link-type-select:hover{
  border-color:#6366f1;
}

.select-wrapper::after{
  content:"⌄";

  position:absolute;
  right:16px;
  top:50%;

  transform:translateY(-50%);

  font-size:18px;
  color:#6b7280;

  pointer-events:none;
}

/* =========================
   INPUT BOX
========================= */

.input-box{
  display:flex;
  align-items:center;

  background:#f9fafb;

  border-radius:16px;
  padding:14px;

  border:1px solid #e5e7eb;
  margin-bottom:12px;
}

.input-icon{
  margin-right:8px;
  color:#6b7280;
  font-size:14px;
}

.custom-input,
.custom-select{
  border:none;
  outline:none;
  background:transparent;

  width:100%;
  font-size:14px;
  color:#111827;
}

/* =========================
   FORM
========================= */

.form-field-box{
  display:flex;
  flex-direction:column;
  gap:10px;

  padding:14px;
  margin-top:14px;

  border:1px solid #e5e7eb;
  border-radius:14px;

  background:#fff;
}

.checkbox-label{
  display:flex;
  align-items:center;
  gap:8px;

  font-size:14px;
  color:#374151;
}

.add-btn{
  border:none;
  background:#111827;
  color:white;

  padding:12px 16px;
  border-radius:14px;

  cursor:pointer;
  margin-bottom:12px;
}

/* =========================
   ACTIONS
========================= */

.actions-wrapper{
  display:flex;
  justify-content:space-between;
  align-items:center;

  margin-top:10px;
  gap:12px;
  flex-wrap:wrap;
}

.youtube-preview{
  border-radius:14px;
  margin-top:10px;
}

.preview-url{
  font-size:13px;
  color:#3B82F6;
  text-decoration:none;
}

.preview-url:hover{
  text-decoration:underline;
}

.add-link-btn{
  padding:14px 20px;

  border-radius:16px;
  border:none;

  background:linear-gradient(135deg,#6366f1,#4f46e5);

  color:white;
  font-weight:600;

  cursor:pointer;

  display:flex;
  align-items:center;
  gap:6px;
}

/* =========================
   LINKS LIST
========================= */

.links-list-title{
  margin-bottom:18px;

  display:flex;
  align-items:center;
  gap:8px;
}

.link-item-card{
  background:#fff;

  border-radius:18px;
  padding:18px;
  margin-bottom:14px;

  border:1px solid #e5e7eb;

  display:flex;
  justify-content:space-between;
  gap:14px;
}

.link-item-left{
  flex:1;
  min-width:0;
}

.link-item-right{
  display:flex;
  align-items:center;
  gap:12px;
  flex-shrink:0;
}

.input-title{
  border:none;
  font-weight:600;
  font-size:14px;
  outline:none;
  margin-bottom:6px;
}

.input-url{
  border:none;
  font-size:13px;
  color:#6b7280;
  outline:none;
  margin-bottom:8px;
}

.icon-row{
  display:flex;
  align-items:center;
  gap:14px;

  margin-top:8px;
  color:#9ca3af;

  flex-wrap:wrap;
}

.icon{
  font-size:16px;
  opacity:0.7;
  cursor:pointer;
  transition:0.2s;
}

.icon:hover{
  opacity:1;
}

.drag-handle{
  cursor:grab;
  font-size:16px;
  opacity:0.7;
}

/* =========================
   PREVIEW
========================= */

.preview-wrapper{
  width:420px;
  min-width:420px;

  display:flex;
  flex-direction:column;
  align-items:center;

  padding:20px;

  background:#f9fafb;
  border-left:1px solid #e5e7eb;
}

.preview-link{
  display:flex;
  justify-content:center;
  align-items:center;
  gap:6px;

  margin-bottom:20px;
  padding:12px 30px;

  background:#fff;
  color:#1D4ED8;

  font-weight:bold;
  text-decoration:none;

  border-radius:14px;
  border:1px solid #1D4ED8;
}

.preview-phone{
  width:340px;
  height:640px;

  background:white;

  border-radius:30px;
  overflow-y:auto;

  box-shadow:
    0 20px 60px rgba(0,0,0,0.2);
}




/* =========================
   TABLET
========================= */

@media (max-width:1200px){

  .preview-wrapper{
    width:360px;
    min-width:360px;
  }

  .preview-phone{
    width:300px;
    height:600px;
  }

  .social-row{
    grid-template-columns:
      1fr
      1fr;
  }

  .social-toggle{
    justify-content:flex-start;
  }

  .social-save-btn,
  .social-delete-btn{
    width:100%;
  }

}

/* =========================
   MOBILE
========================= */

@media (max-width:900px){

  .dashboard{
    flex-direction:column;
    height:auto;
  }

  .lift-panel{
    width:100%;
    padding:16px;
  }

  .preview-wrapper{
    width:100%;
    min-width:100%;

    border-left:none;
    border-top:1px solid #e5e7eb;

    padding:20px 16px;
  }

  .preview-phone{
    width:100%;
    max-width:380px;
    height:650px;
  }

  .preview-link{
    width:100%;
    max-width:380px;

    padding:12px;
  }

  .social-row{
    grid-template-columns:1fr;
    padding:16px;
  }

   .social-toggle{
    justify-content:flex-start;
  }

  .link-item-card{
    flex-direction:column;
  }

  .link-item-right{
    width:100%;
    justify-content:space-between;
    flex-wrap:wrap;
  }

}

/* =========================
   SMALL MOBILE
========================= */

@media (max-width:600px){

  .card{
    padding:16px;
    border-radius:18px;
  }

  .social-card{
    padding:18px;
    border-radius:22px;
  }

  .profile-user-info{
    flex-direction:column;
    align-items:flex-start;
  }

  .social-section{
    flex-direction:column;
    align-items:flex-start;
  }

  .actions-wrapper{
    flex-direction:column;
    align-items:stretch;
  }

  .add-link-btn{
    width:100%;
    justify-content:center;
  }

  .social-actions{
    width:100%;
  }

  .icon-action-btn{
    flex:1;
  }

  .preview-phone{
    border-radius:18px;
    height:600px;
  }

  .social-save-btn,
  .social-delete-btn{
    width:100%;
    height:52px;
  }

}

/* =========================
   EXTRA SMALL
========================= */

@media (max-width:400px){

  .lift-panel{
    padding:12px;
  }

  .card{
    padding:14px;
  }

  .preview-phone{
    height:560px;
  }

  .profile-avatar{
    width:60px;
    height:60px;
  }

  .social-title{
    font-size:18px;
  }

}
`}</style>

  

   
     
    </div>
  );
}  

