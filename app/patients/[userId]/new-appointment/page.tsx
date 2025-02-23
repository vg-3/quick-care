import PatientForm from "@/components/forms/PatientForm";
import Image from "next/image";
import Link from "next/link";

export default function NewAppointment() {
  return (
    <div className="flex h-screen min-h-screen">
      {/* TODO otp verfication */}

      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Image
            src="/assets/icons/logo-full.svg"
            alt="patient"
            width={1000}
            height={1000}
            className="mb-12 h-10 w-fit"
          />
          <p className="justify-items-end text-dark-600 xl:text-left">
            © 2024 QuickCare
          </p>
        </div>
      </section>
      <Image
        src="/assets/images/appointment-img.png"
        alt="doctor"
        className="side-img max-w-[390px] bg-bottom"
        width={1000}
        height={1000}
      ></Image>
    </div>
  );
}
