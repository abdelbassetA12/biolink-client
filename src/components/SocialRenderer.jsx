 
import { socialPlatforms } from "./socialPlatforms";

export default function SocialRenderer({
  user,
  theme,
  className = "",
  iconClassName = ""
}) {
  const socials = user?.socialIcons?.filter(
    (social) => social.active
  ) || [];

  if (!socials.length) {
    return null;
  }

  return (
    <div className={`${theme}-socials ${className}`}>
      {socials.map((social, idx) => {

        const platform = socialPlatforms.find(
          (p) => p.name === social.platform
        );

        const IconComp = platform?.icon;

        return (
          <a
            key={social._id || idx}
            href={social.url}
            target="_blank"
            rel="noreferrer"
            className={`${theme}-social-link`}
            aria-label={social.platform}
          >
            {IconComp ? (
              <IconComp
                className={`${theme}-social-icon ${iconClassName}`}
              />
            ) : (
              <span>
                {social.platform}
              </span>
            )}
          </a>
        );
      })}
    </div>
  );
}
 
