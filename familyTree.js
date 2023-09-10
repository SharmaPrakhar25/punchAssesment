const familyTree = {};

module.exports = {
  countRelative: (userName, relation) => {
    if (userName in familyTree) {
      const person = familyTree[userName];
      if (relation in person.relationships) {
        console.log(person.relationships[relation].length);
      } else {
        console.log("No relative found");
      }
    } else {
      console.log("Person not found");
    }
  },
  addPerson: (userName) => {
    const user = userName.trim();
    if (user in familyTree) {
      return "Person exists already";
    } else {
      familyTree[user] = {
        name: user,
        gender: "", // Add gender information to handle the connect command as per given requirement
        relationships: {},
      };
      console.log("Person added Successfully");
    }
  },
  addRelation: (userName, relation) => {
    if (userName in familyTree) {
      const person = familyTree[userName];
      if (!(relation in person.relationships)) {
        person.relationships[relation] = [];
        console.log("Relationship added successfully");
      } else {
        console.log("Relationship already exists");
      }
    } else {
      for (const person in familyTree) {
        let currentPerson = familyTree[person];
        currentPerson.relationships[relation] = [];
      }
    }
  },
  getRelative: (userName, relation) => {
    if (userName in familyTree) {
      const person = familyTree[userName];
      if (!(relation in person.relationships)) {
        console.log(person.relationships[relation]);
      } else {
        console.log("Relationship not found");
      }
    } else {
      for (const person in familyTree) {
        let currentPerson = familyTree[person];
        if (relation in currentPerson.relationships) {
          console.log(currentPerson.relationships[relation]);
        } else {
          console.log("No relative found");
        }
      }
    }
  },
  updateRelation: (userName, relation, relativeName) => {
    if (userName in familyTree) {
      const person = familyTree[userName];
      if (!(relation in person.relationships)) {
        person.relationships[relation] = [];
      }
      person.relationships[relation].push(relativeName.trim());
      console.log("Relation added successfully");
    } else {
      console.log("Person not found");
    }
  },
  show: () => {
    console.log(familyTree);
  },
};
