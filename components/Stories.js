import React, { useEffect, useState } from "react";
// faker is not supported in vercel for some reason
// import { faker } from "@faker-js/faker";
import Story from "./Story";
import { useSession } from "next-auth/react";
import data from "../data.json";

const Stories = () => {
  const { data: session } = useSession();
  const [suggestions, setSuggestions] = useState(data);
  // useEffect(() => {
  //   const suggestions = [...Array(20)].map((_, i) => ({
  //     userId: faker.datatype.uuid(),
  //     userName: faker.internet.userName(),
  //     email: faker.internet.email(),
  //     avatar: faker.image.avatar(),
  //     password: faker.internet.password(),
  //     birthDate: faker.date.birthdate(),
  //     registeredAt: faker.date.past(),
  //   }));
  //   setSuggestions(suggestions);
  // }, []);
  // console.log("Suggestions : ", suggestions);
  return (
    <div className="flex space-x-2 p-6 bg-white border-gray-200 mt-8 border-2 rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
      {session && (
        <Story img={session?.user?.image} userName={session?.user?.username} />
      )}

      {suggestions.map((profile) => (
        <Story
          key={profile.id}
          img={profile.avatar}
          userName={profile.userName}
        />
      ))}
    </div>
  );
};

export default Stories;
