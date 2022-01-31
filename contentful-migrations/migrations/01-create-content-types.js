module.exports = function (migration) {
  const company = migration
    .createContentType("company")
    .name("Company")
    .displayField("name");
  company.createField("name").type("Symbol").required(true).name("Name");
  company.createField("website").type("Symbol").name("Website");
  company
    .createField("industry")
    .type("Symbol")
    .required(true)
    .name("Industry");
  company
    .createField("specialities")
    .type("Array")
    .items({ type: "Symbol" })
    .name("Specialities");
  company.createField("location").type("Symbol").name("Location");
  company.createField("year").type("Integer").name("Year");
  company.createField("logo").type("Symbol").name("Logo");

  const country = migration
    .createContentType("country")
    .name("Country")
    .displayField("name");
  country
    .createField("name")
    .type("Symbol")
    .required(true)
    .name("Name")
    .validations([{ unique: true }]);
  const specialities = migration
    .createContentType("speciality")
    .name("Speciality")
    .displayField("name");
  specialities
    .createField("name")
    .type("Symbol")
    .required(true)
    .name("Name")
    .validations([{ unique: true }]);
};
