import React from "react";

type AvatarProps = {
  name: string;
  size?: number;
  backgroundColor?: string;
  textColor?: string;
};

const Avatar: React.FC<AvatarProps> = ({
  name,
  size = 50,
}) => {
  const getInitials = (fullName: string) => {
    try {
    const nameParts = fullName.trim().split(" ");
    if (nameParts.length === 1) {
      return nameParts[0]?.charAt(0).toUpperCase() || "";
    }
    return (
      nameParts[0]?.charAt(0).toUpperCase() +
      nameParts[1]?.charAt(0).toUpperCase()
    );
  } catch {
    return "NU"
  }
  };

  const initials = getInitials(name);

  return (
    <div
      className="flex items-center bg-blue-200 text-blue-500 rounded-full justify-center font-normal text-uppercase"
      style={{
        width: size,
        height: size,
        fontSize: `${size / 2}px`,
      }}
    >
      {initials}
    </div>
  );
};

export default Avatar;
