type SocialMedias = {
  twitter: {
    profile_url?: string;
  };
  instagram: {
    profile_url?: string;
  };
  linkenin: {
    profile_url?: string;
  };
  facebook: {
    profile_url?: string;
  };
  youtube: {
    profile_url?: string;
  };
  pinterest: {
    profile_url?: string;
  };
  flickr: {
    profile_url?: string;
  };
};
export const socialMediasToArray = (socialMedia: SocialMedias): string[] => {
  return Object.values(socialMedia).reduce((acc: string[], curr) => {
    const profileUrl = curr.profile_url;
    let urls: string[] = acc;

    if (profileUrl) {
      urls = [...urls, profileUrl];
    }

    return urls;
  }, []);
};
