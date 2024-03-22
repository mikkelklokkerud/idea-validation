"use client";
import GetNotifiedForm from "@/components/ui/GetNotifiedForm";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";

export default function LandingPage() {
  const [isTyping, setIsTyping] = useState(false);

  return (
    <div>
      <div className="flex min-h-screen justify-center items-center bg-repeat bg-pattern w-[100vw]">
        <div className="absolute h-full w-full z-10" />
        <div className="max-w-[1000px] mx-10 relative z-20">
          <h1 className="text-center font-bold text-[28px] max-w-[1024px] mx-auto leading-tight tracking-tighter">
            Scheduling, payments, communication and follow up
          </h1>
          <span className="text-[60px] leading-tight font-bold text-center mx-auto block tracking-tighter">
            Can we make <span className="underline">voice teaching</span>{" "}
            <span className={`block relative ${isTyping ? "typing" : ""}`}>
              more{" "}
              <TypeAnimation
                className={`type-animation`}
                sequence={[
                  "smooth?",
                  () => setIsTyping(false),
                  3000,
                  () => setIsTyping(true),
                  "",
                  () => setIsTyping(false),
                  700,
                  () => setIsTyping(true),
                  "structured?",
                  () => setIsTyping(false),
                  3000,
                  () => setIsTyping(true),
                  "",
                  () => setIsTyping(false),
                  700,
                  () => setIsTyping(true),
                  "automated?",
                  () => setIsTyping(false),
                  3000,
                  () => setIsTyping(true),
                  "",
                  () => setIsTyping(false),
                  700,
                  "simple?",
                  () => setIsTyping(false),
                  3000,
                  () => setIsTyping(true),
                  "",
                  () => setIsTyping(false),
                  700,
                  "profitable?",
                  () => setIsTyping(false),
                  3000,
                  () => setIsTyping(true),
                  "",
                  () => setIsTyping(false),
                  700,
                ]}
                wrapper="span"
                preRenderFirstString={true}
                cursor={true}
                speed={{ type: "keyStrokeDelayInMs", value: 100 }}
                repeat={Infinity}
                style={{ display: "inline-block" }}
              />
            </span>
          </span>

          <div className="pt-8 mb-6 text-gray-600 text-[22px] leading-[32px] text-center md:leading-normal">
            <ul className="flex flex-col gap-1">
              <li className="">❌ Scheduling/payments can be a headache.</li>
              <li className="">
                ❌ Enforcing 24h cancellation policies can be difficult.
              </li>
              <li className="">
                ❌ Keeping track of remaining lessons on bundle purchases is
                cumbersome.
              </li>
              <li className="">
                ❌ Things like &quot;homework&quot; assignment & session notes
                is a bit all over the place.
              </li>
              <li className="">
                ❌ Communication is happening in multiple places (email,
                whatsapp, facebook, etc).
              </li>
              <li className="">
                ❌ Teachers leave academies and take students with them.
              </li>
            </ul>
          </div>

          <div className="flex justify-center flex-col text-center">
            <p className="text-black lg:text-[22px] tracking-tighter text-center mt-4 mb-10 leading-[32px] font-bold underline">
              How can we improve this?
            </p>
            <p className="text-gray-700 text-[22px] text-center mb-10 leading-[36px]">
              We&apos;re not quite sure but we&apos;re working on it. The goal
              is ultimately to create something that voice teachers get lots of
              value from. An app or a platform that speaks to you.
            </p>
            <p className="mb-3 text-center font-bold text-[22px] mx-auto leading-tight tracking-tighter">
              Get notified when we launch:
            </p>
            <GetNotifiedForm />
          </div>
        </div>
      </div>
    </div>
  );
}
