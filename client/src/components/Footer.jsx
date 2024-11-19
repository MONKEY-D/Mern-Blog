import React from "react";
import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { SiLeetcode } from "react-icons/si"
import { FaFigma } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function FooterCom() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-xl">
                Kartik's
              </span>
              Blog
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" target="blank" rel="noopener noreferrer">
                  My Other Works
                </Footer.Link>
                <Footer.Link href="#" target="blank" rel="noopener noreferrer">
                  My Portfolio Website
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow Me" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" target="blank" rel="noopener noreferrer">
                  Github
                </Footer.Link>
                <Footer.Link href="#" target="blank" rel="noopener noreferrer">
                  My Portfolio Website
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">
                  Privacy Policy
                </Footer.Link>
                <Footer.Link href="#">
                  Terms &amp; Condition
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider/>
        <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright href="#" by="Kartik's Blog" year={new Date().getFullYear()}/>
        </div>
        <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon href="#" icon={SiLeetcode}/>
            <Footer.Icon href="#" icon={FaFigma}/>
            <Footer.Icon href="#" icon={FaInstagram}/>
            <Footer.Icon href="#" icon={FaLinkedin}/>
            <Footer.Icon href="#" icon={FaGithub}/>
        </div>
      </div>
    </Footer>
  );
}
