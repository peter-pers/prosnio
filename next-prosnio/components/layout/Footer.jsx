const Footer = () => {
  return (
    <footer className="bg-black text-white grid grid-cols-8 mt-4">
      <div></div>
      <div className=" flex items-center justify-end">© 2022 Prosino GmbH</div>
      <div></div>
      <div className="col-span-4 md:flex items-center justify-between p-6">
        <a href="#">General Terms and Conditions</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Cookie Settings</a>
        <a href="#">Legal</a>
        <a href="#">Notice</a>
        <a href="#">Sitemap</a>
      </div>
      <div></div>
    </footer>
  );
};

export default Footer;
