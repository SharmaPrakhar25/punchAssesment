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
  addRelationWithUserName: (userName, relation) => {
    if (userName in familyTree) {
      const person = familyTree[userName];
      if (!(relation in person.relationships)) {
        person.relationships[relation] = [];
        console.log("Relationship added successfully");
      } else {
        console.log("Relationship already exists");
      }
    } else {
      console.log("Person not found");
    }
  },
  addRelation: (relation) => {
    const user = Object.keys(familyTree)[0];
    if (familyTree[user]) {
      familyTree[user].family[relation] = [];
      console.log("Relationship added successfully");
    } else {
      console.log("User not found");
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
