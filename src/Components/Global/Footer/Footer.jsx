import chatPice from "../../../assets/Global/images/chatpic.png";
import mailPic from "../../../assets/Global/images/mail.png";
import phonePic from "../../../assets/Global/images/smartphone.png";
import mailBoxPic from "../../../assets/Global/images/mailbox.png";
import TicketLogo from "../../../assets/Global/images/TicketLogo.png";
import youtube from "../../../assets/Global/images/youtube.png";
import facebook from "../../../assets/Global/images/facebook.png";
import twitter from "../../../assets/Global/images/twitter.png";
import linkedin from "../../../assets/Global/images/linkedin.png";

// import LanguageDropDown from "../Header/LanguageDropDown";

function Footer() {
  return (
    <div className="w-full  py-4 pb-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex gap-5 md:gap-0 pb-5">
          <div className="flex flex-col  w-1/2 whitespace-nowrap">
            <div className="text-lg font-bold text-gray-500 pb-4 whitespace-normal">
              ქსელი
            </div>
            <span className="text-sm font-semibold text-gray-400 pb-4">
              • ავიაკომპანიები
            </span>
            <span className="text-sm font-semibold text-gray-400 pb-4">
              • აეროპორტები
            </span>
            <span className="text-sm font-semibold text-gray-400 pb-4">
              • რეგიონები
            </span>
            <span className="text-sm font-semibold text-gray-400 pb-4">
              • ქვეყნები
            </span>
            <span className="text-sm font-semibold text-gray-400 pb-4">
              • ქალაქები
            </span>
          </div>
          <div className="flex flex-col  w-1/2 whitespace-nowrap">
            <div className="text-lg font-bold text-gray-500 pb-4 ">
              კომპანია
            </div>
            <span className="text-sm font-semibold text-gray-400 pb-4">
              • რატომ ჩვენ
            </span>
            <span className="text-sm font-semibold text-gray-400 pb-4">
              • ჩვენს შესახებ
            </span>
            <span className="text-sm font-semibold text-gray-400 pb-4">
              • ღირებულებები
            </span>
            <span className="text-sm font-semibold text-gray-400 pb-4">
              • წამოწყება
            </span>
            <span className="text-sm font-semibold text-gray-400 pb-4">
              • გეგმები
            </span>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col md:flex-row">
          <div className=" flex-col  md:w-1/2 hidden md:flex">
            <div className="text-lg font-bold text-gray-500 pb-4 ">
              დახმარება
            </div>
            <span className="text-sm font-semibold text-gray-400 pb-4">
              • დახმარების ცენტრი
            </span>
            <span className="text-sm font-semibold text-gray-400 pb-4">
              • კოვიდ გამოხმაურება
            </span>
            <span className="text-sm font-semibold text-gray-400 pb-4">
              • პრეს ცენტრი
            </span>
            <span className="text-sm font-semibold text-gray-400 pb-4">
              • წესები და პირობები
            </span>
            <span className="text-sm font-semibold text-gray-400 pb-4">
              • კონფიდენციალურობა
            </span>
          </div>
          <div className="flex flex-col gap-3  md:w-1/2">
            <div className="text-lg font-bold text-gray-500 pb-4 ">
              კონტაქტი
            </div>
            <div className="px-7 py-2 flex items-center bg-backgroundGray rounded-md text-sm font-semibold text-gray-500 gap-5">
              <img src={chatPice} alt="chat" />
              <span className="pr-16">მოგვწერეთ</span>
            </div>
            <div className="px-7 py-2 flex items-center bg-backgroundGray rounded-md text-sm font-semibold text-gray-500 gap-5">
              <img src={mailPic} alt="chat" />
              <span className="pr-16">fly@contact.ge</span>
            </div>
            <div className="px-7 py-2 flex items-center bg-backgroundGray rounded-md text-sm font-semibold text-gray-500 gap-5">
              <img src={phonePic} alt="chat" />
              <span className="">+995 525 123 320</span>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-5 md:mt-0">
        <div className=" border-t border-b border-gray-200 py-5 w-full flex flex-col md:flex-row justify-between gap-5">
          <div className="flex  md:w-1/2 gap-5">
            <img src={mailBoxPic} alt="mailbox" className="hidden sm:flex " />
            <div className="text-sm font-semibold text-gray-400">
              გამოიწერე ჩვენი ელექტრონული ფოსტა და მიიღე პერსონალი და
              ექსკლუზიური შეთავაზებები
            </div>
          </div>
          <div className="flex md:w-1/2 md:justify-end gap-2">
            <input
              type="text"
              id="subscribe"
              className="outline-none focus:ring-0 border border-solid border-gray-300 transition-all duration-300 px-3 rounded w-2/3 text-sm text-gray-500 font-semibold"
              placeholder="enter your email"
            />

            <button className="relative bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-7 rounded flex items-center">
              {"Subscribe"}
            </button>
          </div>
        </div>
        <div className="mt-7 flex flex-col md:flex-row justify-between">
          <div className="flex flex-col md:flex-row gap-5 items-center justify-between">
            <img src={TicketLogo} alt="Logo" />
            <span className="text-sm font-semibold text-gray-400">
              FLY.GE 2021 ყველა უფლება დაცულია
            </span>
          </div>
          <div className="flex gap-3 items-center mx-auto md:mx-0 mt-3 md:mt-0">
            <img src={youtube} alt="youtube" />
            <img src={facebook} alt="facebook" />
            <img src={twitter} alt="twitter" />
            <img src={linkedin} alt="youtube" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
