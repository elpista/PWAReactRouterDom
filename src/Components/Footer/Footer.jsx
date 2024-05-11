import React, { useState, useEffect } from "react";
import ImageLink from "../ImageLink/ImageLink";

//FALTA COMPLETAR EL FOOTER, PARA EL 11/5 YA ESTA

function Footer() {
  return (
    <div className=" bg-gray-700  h-34 mt-10 border-t-4 border-white">
      <div className="flex justify-center">
        <div className="content-center">
          <h4 className="p-4 text-white ">Redes sociales</h4>
        </div>
        <div className="ml-6 p-4">
        <div className="flex">
            <ImageLink
              to={"https://www.instagram.com/gamezonepwa"}
              imageUrl="https://img.icons8.com/ios-filled/50/instagram-new--v1.png"
              alt="Instagram"
              className="h-8 m-1"
              texto="Instagram"
            />
            <p className="text-2xl">Instagram</p>
            </div>
          <div className="flex">
            <ImageLink
              to={"https://www.twitter.com/gamezonepwa"}
              imageUrl="https://img.icons8.com/color/48/twitterx--v1.png"
              alt="Twitter"
              className="h-8 m-1"
            />
            <p className="text-2xl">Twitter</p>
          </div>
          <div className="flex">
            <ImageLink
              to={"https://www.facebook.com/gamezonepwa"}
              imageUrl="https://img.icons8.com/ios-filled/50/facebook--v1.png"
              alt="Facebook"
              className="h-8 m-1"
            />
            <p className="text-2xl">Facebook</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
