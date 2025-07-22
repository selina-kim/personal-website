import EmailIcon from "@/icons/EmailIcon";
import GitHubIcon from "@/icons/GitHubIcon";
import { SocialLink } from "./SocialLink";
import LinkedInIcon from "@/icons/LinkedInIcon";

export const Links = () => {
  return (
    <div className="flex gap-x-2">
      <SocialLink
        Icon={GitHubIcon}
        url="https://github.com/selina-kim"
        alt="GitHub Link"
      />
      <SocialLink
        Icon={LinkedInIcon}
        url="https://www.linkedin.com/in/selina-kim/"
        alt="LinkedIn Link"
      />
      <SocialLink
        Icon={EmailIcon}
        url="mailto:selinakimdev@outlook.com"
        alt="Email Link"
      />
    </div>
  );
};

export default Links;
