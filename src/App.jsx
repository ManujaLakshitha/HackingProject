import React from "react";
import "./App.css";
import Main from "./componnent/Main";

function App() {
  return (
    <>
      <div className="bg-gradient-to-r from-slate-950 to-green-800">
        <div className="text-center flex-row">
          <div className="grid grid-cols-12 text-center mb-24">
            <p className="great col-span-12 text-sm tracking-widest text-white font-bold mt-5 mb-1">
              WHY HACKING.LK
            </p>
            <p className="lato col-start-3 col-span-9 font-extrabold text-6xl  text-green-300">
              Sri Lankan Best Web for Hacking Experiences
            </p>
          </div>
        </div>

        <div className="video mb-20">
          <Main />
        </div>

        <div className="card gap-5">
          <div className="max-w-sm rounded-lg border-2 border-blue-600 text-center px-8 py-12">
            <img className="w-28" src="src/assets/image1.png" />

            <div className="text-center mt-8">
              <div className="text-white font-bold text-3xl mb-2">
                Hands-On <br />
                <span>Penetration Testing</span>
              </div>

              <p className="text-white mt-10">
                Hacking ඉගෙන ගන්න නම් , කොළ වල ලියපු තියරි පාඩම් කර කර mcq වලට
                උත්තර තෝරන එක පැත්තකින් තියල අත් දෙක පොඩ්ඩක් dirty කරගන්නම
                වෙනවා. ඉතින් ඒ හින්දා අපි Virus , trojan , Backdoor , SQL
                injection , Wi-Fi hacking, Dark Web එක්ක පොඩ්ඩක් සෙල්ලම් කරන
                ගමන් ප්‍රයෝගිකව පියවරෙන් පියවර ethical hacking ගැන කතා කරනවා.
                <br />
                <br />
                ඊටපස්සේ ඊලග පියවර විදිහට මේ වගේ cyber attack වලින් ආරක්ෂා වෙන්නේ
                කොහොමද කියන එක කතා කරනවා
              </p>
            </div>
          </div>

          <div className="max-w-sm rounded-lg border-2 border-blue-600 text-center px-8 py-12">
            <img className="w-36" src="src/assets/image2.png" />

            <div className="text-center mt-8">
              <div className="text-white font-bold text-3xl mb-2">
                Top-Notch Hacking Content
              </div>

              <p className="text-white mt-10">
                අලුතින් Cyber Security field එකට එන කෙනෙක්ට පැහැදිලිව තේරුම්
                ගන්න පුළුවන් විදිහට Basic level එකෙන් පටන් අරගෙන Advance Hacking
                Technics වෙනකන් පිළිවෙලට හදපු, ශ්‍රීලංකාව තුල හොයාගන්න අපහසු
                Top-Notch Hacking Content මේ Godzilla Course එකට අන්තර්ගත වෙනවා.
              </p>

              <button className="mt-5 bg-green-500 text-white text-xl font-bold rounded-lg p-4">
                course එකේ content එක <br />
                ගැන මෙතනින් බලන්න
              </button>
            </div>
          </div>

          <div className="max-w-sm rounded-lg border-2 border-blue-600 text-center px-12 py-12">
            <img className="w-52" src="src/assets/image3.png" />

            <div className="text-center mt-8">
              <div className="text-white font-bold text-3xl mb-2">
                Cyber Security Certificate
              </div>

              <p className="text-white mt-10">
                Hackinglk Zero to Godzilla course එක සම්පුර්ණ කරාට පස්සේ ඔයාට
                ගිෆ්ට් එකක් වගේම cybersecurity certificate එකක් ලබාගන්න පුළුවන්.
                <br />
                <br />ඒ වගේම මේ course එකෙන් පස්සේ අපි ඔයාලව eJPT exam (
                eLearnSecurity Junior Penetration Tester v2 ) එකට වගේම , CEH
                exam ( Certified Ethical Hacker ) එකට guide කරනවා.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-6 gap-4 mt-24">
          <div className="bg-white col-start-2 col-span-4 text-center rounded-3xl p-20">
            <p className="text-4xl font-semibold mb-10">
              එහෙනම් අපි Godzilla Course එකෙන් හම්බෙමු ,
            </p>
            <p className="text-8xl font-extrabold text-orange-400 mb-10">
              Rs: 12,000
            </p>
            <button className="bg-orange-300 text-lg font-bold rounded-lg px-20 py-3 mb-10">
              Join Now !!!
            </button>
            <p className="text-xl">Full Package* 3 Year Update* 1 User Login</p>
          </div>
        </div>
        <br/>

      </div>
    </>
  );
}

export default App;
