
var people = [{
  id: 1,
  name: "Aegon Targaryen",
  children: [{
    id: 2,
    name: "Jaehaerys Targaryen",
    children: [{
      id: 4,
      name: "Daenerys Targaryen"
    },{
      id: 5,
      name: "Rhaegar Targaryen",
      children: [{
        id: 6,
        name: "Aegon Targaryen"
      }]
    }]
  },{
    id: 3,
    name: "Rhaelle Targaryen"
  }],
}];

var newlist = [];
var newObj = {};

function normalizer(familyTreeList){

  for(var i=0; i<familyTreeList.length; i++){

    if(familyTreeList[i].children === undefined){return;}

    newObj = {  id: familyTreeList[i].id,
                    name: familyTreeList[i].name,
                    children: []};

    for(var j=0; j<(familyTreeList[i].children).length;j++){

      (newObj.children).push(familyTreeList[i].children[j].id);

    }

    newlist.push(newObj);

    familyTreeList = familyTreeList[i].children;
    normalizer(familyTreeList);
  }


}
console.log("newlist: ", newlist);

console.log(normalizer(people));
