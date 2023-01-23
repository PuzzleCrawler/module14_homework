const parser = new DOMParser();

// XML
const xmlString = `<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`;

const xmlDoc = parser.parseFromString(xmlString, "text/xml");

const students = xmlDoc.getElementsByTagName("student");
const list = [];
for (let i = 0; i < students.length; i++) {
  const student = students[i];
  const name = student.getElementsByTagName("name")[0];
  const firstName = name.getElementsByTagName("first")[0].textContent;
  const lastName = name.getElementsByTagName("second")[0].textContent;
  const age = student.getElementsByTagName("age")[0].textContent;
  const prof = student.getElementsByTagName("prof")[0].textContent;
  const lang = name.getAttribute("lang");
  list.push({
    name: `${firstName} ${lastName}`, 
    age: age, 
    prof: prof, 
    lang: lang
  });
}
console.log({list});
