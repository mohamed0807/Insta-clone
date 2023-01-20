import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";

const Suggestions = () => {
  const [suggestions, setSuggestions] = useState([]);
  // useEffect(() => {
  //   const suggestions = [...Array(5)].map((_, i) => ({
  //     ...faker.helpers.contextualCard(),
  //     id: 1,
  //   }));
  //   setSuggestions(suggestions);
  // }, []);
  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      userId: faker.datatype.uuid(),
      userName: faker.internet.userName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      password: faker.internet.password(),
      birthDate: faker.date.birthdate(),
      registeredAt: faker.date.past(),
      company:{
        name:faker.company.name
      }
    }));
    setSuggestions(suggestions);
  }, []);
  console.log(suggestions);

  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm font-bold" >Suggestions for all</h3>
        <button className="text-gray-600 font-semibold cursor-pointer"  >See all</button>
      </div>
      {
        suggestions.map((profile)=>(
          <div key={profile.id} className="flex items-center justify-between mt-3" >
            <img src={profile.avatar} className="w-10 h-10 rounded-full border p-[2px]" alt="img" />
            <div className="flex-1 ml-4" >
              <h2 className="font-semibold text-sm" >{profile.userName}</h2>
              <h3 className="text-xs text-gray-400" >works at {profile.company.name} </h3>
            </div>
            <button className="text-blue-500 text-sm font-bold" >Follow</button>
          </div>
        ))
      }
    </div>
  );
};

export default Suggestions;
