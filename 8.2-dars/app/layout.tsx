import { ReactNode } from "react";
import  './globals.css';
const RouterLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html>
        <head>
            <title>O'zbekiston va dunyoning so'nggi yangiliklari — «Daryo»</title>
        </head>
      <body>{children}</body>
    </html>
  );
};

export default RouterLayout;
