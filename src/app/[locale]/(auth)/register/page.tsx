import RegistrationPage from "@/pages/public/registration";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { paths } from "@/shared/routing";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Register() {
  const session = await getServerSession(options);
  if (session != null) return redirect(paths.dashboard.manage);
  return <RegistrationPage />;
}
