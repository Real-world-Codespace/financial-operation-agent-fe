import "./styles.css";
import "./extra.css";
import "./scroll-layout.css";
import "./new-case.css";
import "./status-fix.css";
export const metadata={title:"FinOps Control",description:"Financial case operations platform"};
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="vi"><body>{children}</body></html> }
