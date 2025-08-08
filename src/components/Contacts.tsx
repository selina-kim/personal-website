import EmailIcon from "@/icons/EmailIcon";
import GitHubIcon from "@/icons/GitHubIcon";
import { SocialLink } from "./SocialLink";
import LinkedInIcon from "@/icons/LinkedInIcon";
import EmailButton from "./EmailButton";

export const Contacts = () => {
  const handleEmailClick = () => {
    navigator.clipboard.writeText("selinakimdev@outlook.com");
    window.alert('copied "selinakimdev@outlook.com" to clipboard!');
  };

  return (
    <div className="flex gap-x-2">
      <SocialLink Icon={GitHubIcon} url="https://github.com/selina-kim" />
      <SocialLink
        Icon={LinkedInIcon}
        url="https://www.linkedin.com/in/selina-kim/"
      />
      <EmailButton Icon={EmailIcon} onClick={handleEmailClick} />
    </div>
  );
};

export default Contacts;
