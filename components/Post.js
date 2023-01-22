import React, { useEffect, useState } from "react";
import {
  BookmarkIcon,
  ChatBubbleLeftIcon,
  EllipsisHorizontalIcon,
  FaceSmileIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { useSession } from "next-auth/react";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase";

const Post = ({ id, userName, userImg, Img, caption }) => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const { data: session } = useSession();
  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, "posts", id, "comments"),
          orderBy("timestamp", "desc")
        ),
        (snapshot) => setComments(snapshot.docs)
      ),
    [db]
  );
  const sendComment = async (e) => {
    e.preventDefault();
    const commentToSend = comment;
    setComment("");
    await addDoc(collection(db, "posts", id, "comments"), {
      comment: commentToSend,
      username: session.user.username,
      userImage: session.user.image,
      timestamp: serverTimestamp(),
    });
  };
  // console.log( "com",comments.map((data)=>data.data()))
  return (
    <div className="bg-white my-7 border rounded-sm ">
      <div className="flex items-center p-5">
        <Image
          src={userImg}
          alt="user"
          width={12}
          height={12}
          className="rounded-full object-contain border p-1 mr-3"
        />
        <p className="flex-1 font-bold ">{userName}</p>
        <EllipsisHorizontalIcon className="h-5" />
      </div>
      <img src={Img} className="w-full h-full object-cover" alt="Img" />

      {session && (
        <div className="flex justify-between px-4 pt-4">
          <div className="flex space-x-4">
            <HeartIcon className="btn" />
            <ChatBubbleLeftIcon className="btn" />
            <PaperAirplaneIcon className="btn" />
          </div>
          <BookmarkIcon className="btn" />
        </div>
      )}
      <p className="p-5 truncate ">
        <span className="font-bold mr-1 ">{userName}</span>
        {caption}
      </p>
      {comments.length > 0 && (
        <div className="ml-10 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin">
          {comments.map((comment) => (
            <div key={comment.id} className="flex items-center space-x-2 mb-3">
              <img
                src={comment.data().userImage}
                className="h-7 rounded-full"
                alt="img"
              />
              <p className="flex-1 text-sm">
                <span className="font-bold">{comment.data().username} </span>
                {comment.data().comment}
              </p>
            </div>
          ))}
        </div>
      )}
      {session && (
        <form className="flex items-center p-4">
          <FaceSmileIcon className="h-7" />
          <input
            className="border-none flex-1 focus:ring-0 outline-none"
            placeholder="Comment Here...."
            type="text"
            onChange={(e) => setComment(e.target.value)}
            value={comment}
          />
          <button
            onClick={sendComment}
            type="submit"
            disabled={!comment.trim()}
            className="font-semibold text-blue-500"
          >
            Post
          </button>
        </form>
      )}
    </div>
  );
};

export default Post;
