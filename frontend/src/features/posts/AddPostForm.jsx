import { useState } from "react";
import { useDispatch } from "react-redux";

import { postAdded, postUpdated, addNewPost } from "./postsSlice";

export const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null)
  // const [userId, setUserId] = useState('')
  const [addRequestStatus, setAddRequestStatus] = useState("idle");

  const dispatch = useDispatch();
  const cannSave =
    [title, content].every(Boolean) && addRequestStatus === "idle";

  const onSavePostClicked = async () => {
    if (cannSave) {
      try {
        setAddRequestStatus("pending");
        await dispatch(addNewPost({ title, content, image })).unwrap();
        setTitle("");
        setContent("");
        setImage('')
      } catch (err) {
        console.error("failed to save the post: ", err);
      } finally {
        setAddRequestStatus("idle");
      }
    }
  };

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onImageChanged = (e) => setImage(e.target.files[0]);

  return (
    <section>
      <form>
        <label htmlFor="postTitle">Post title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postContent"> Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <label htmlFor="postImage">Image:</label>
        <input
          type="file"
          id="postImage"
          name="postImage"
          onChange={onImageChanged}
        />
        <button type="button" onClick={onSavePostClicked} disabled={!cannSave}>
          Save post
        </button>
      </form>
    </section>
  );
};
