"use client";
import React from "react";
import {
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalTrigger,
} from "./ui/animated-modal";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "../../lib/utils";

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};

export function Modal1() {
    return (
        <div className="flex items-center justify-center">
            <Modal>
                <ModalTrigger className="bg-black dark:bg-slate-600 bg-gradient-to-r from-sky-500 to-indigo-500 dark:text-black text-white flex justify-center group/modal-btn">
                    <span className="group-hover/modal-btn:translate-x-40 text-center font-semibold transition text-slate-100 duration-500">
                        Get In Touch
                    </span>
                    <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
                        👋🏻
                    </div>
                </ModalTrigger>
                <ModalBody>
                    <ModalContent>
                        <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
                            Let&apos;s talk about {" "}
                            <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                                Technologies
                            </span>{" "}
                            now! 👋🏻
                        </h4>
                        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                            <LabelInputContainer>
                                <Label htmlFor="firstname">First name</Label>
                                <Input id="firstname" placeholder="Putra" type="text" />
                            </LabelInputContainer>
                            <LabelInputContainer>
                                <Label htmlFor="lastname">Last name</Label>
                                <Input id="lastname" placeholder="Pratama" type="text" />
                            </LabelInputContainer>
                        </div>
                        <LabelInputContainer className="mb-4">
                            <Label htmlFor="email">Email Address</Label>
                            <Input id="email" placeholder="email@domain" type="email" />
                        </LabelInputContainer>
                        <LabelInputContainer className="mb-4">
                            <Label htmlFor="">Message</Label>
                            <Input id="message" placeholder="Hey ren, i wanna ..." type="text" />
                        </LabelInputContainer>

                    </ModalContent>
                    <ModalFooter className="gap-4">
                        <button className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
                            Cancel
                        </button>
                        <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
                            Send
                        </button>
                    </ModalFooter>
                </ModalBody>
            </Modal>
        </div>
    );
}

const PlaneIcon = ({ className }: { className?: string }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M16 10h4a2 2 0 0 1 0 4h-4l-4 7h-3l2 -7h-4l-2 2h-3l2 -4l-2 -4h3l2 2h4l-2 -7h3z" />
        </svg>
    );
};

const VacationIcon = ({ className }: { className?: string }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M17.553 16.75a7.5 7.5 0 0 0 -10.606 0" />
            <path d="M18 3.804a6 6 0 0 0 -8.196 2.196l10.392 6a6 6 0 0 0 -2.196 -8.196z" />
            <path d="M16.732 10c1.658 -2.87 2.225 -5.644 1.268 -6.196c-.957 -.552 -3.075 1.326 -4.732 4.196" />
            <path d="M15 9l-3 5.196" />
            <path d="M3 19.25a2.4 2.4 0 0 1 1 -.25a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 1 .25" />
        </svg>
    );
};

const ElevatorIcon = ({ className }: { className?: string }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 4m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z" />
            <path d="M10 10l2 -2l2 2" />
            <path d="M10 14l2 2l2 -2" />
        </svg>
    );
};

const FoodIcon = ({ className }: { className?: string }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M20 20c0 -3.952 -.966 -16 -4.038 -16s-3.962 9.087 -3.962 14.756c0 -5.669 -.896 -14.756 -3.962 -14.756c-3.065 0 -4.038 12.048 -4.038 16" />
        </svg>
    );
};

const MicIcon = ({ className }: { className?: string }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M15 12.9a5 5 0 1 0 -3.902 -3.9" />
            <path d="M15 12.9l-3.902 -3.899l-7.513 8.584a2 2 0 1 0 2.827 2.83l8.588 -7.515z" />
        </svg>
    );
};

const ParachuteIcon = ({ className }: { className?: string }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M22 12a10 10 0 1 0 -20 0" />
            <path d="M22 12c0 -1.66 -1.46 -3 -3.25 -3c-1.8 0 -3.25 1.34 -3.25 3c0 -1.66 -1.57 -3 -3.5 -3s-3.5 1.34 -3.5 3c0 -1.66 -1.46 -3 -3.25 -3c-1.8 0 -3.25 1.34 -3.25 3" />
            <path d="M2 12l10 10l-3.5 -10" />
            <path d="M15.5 12l-3.5 10l10 -10" />
        </svg>
    );
};
