"use client";
import React, { useState } from "react";
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
import toast, { Toaster } from "react-hot-toast";

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

export function Modal1({ onClose }: { onClose: () => void }) {
    // State untuk setiap input
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    // State untuk status pengiriman
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Mencegah reload halaman
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ firstName, lastName, email, message }),
            });

            if (response.ok) {
                toast.success("Pesan berhasil terkirim!");
                // Reset form setelah berhasil
                setFirstName("");
                setLastName("");
                setEmail("");
                setMessage("");
            } else {
                throw new Error("Gagal mengirim pesan.");
            }
        } catch (error) {
            toast.error("Terjadi kesalahan. Silakan coba lagi.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="flex items-center justify-center">
            <Toaster position="top-center" />
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
                            Let&apos;s talk about Technologies now! 👋🏻
                        </h4>

                        {/* Ganti div dengan form dan tambahkan onSubmit */}
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                                <LabelInputContainer>
                                    <Label htmlFor="firstname">First name</Label>
                                    <Input id="firstname" placeholder="Putra" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                                </LabelInputContainer>
                                <LabelInputContainer>
                                    <Label htmlFor="lastname">Last name</Label>
                                    <Input id="lastname" placeholder="Pratama" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                                </LabelInputContainer>
                            </div>
                            <LabelInputContainer className="mb-4">
                                <Label htmlFor="email">Email Address</Label>
                                <Input id="email" placeholder="email@domain" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            </LabelInputContainer>
                            <LabelInputContainer className="mb-8"> {/* Tambah margin bawah agar ada jarak ke tombol */}
                                <Label htmlFor="message">Message</Label>
                                <Input id="message" placeholder="Hey ren, i wanna ..." type="text" value={message} onChange={(e) => setMessage(e.target.value)} required />
                            </LabelInputContainer>

                            <ModalFooter className="gap-4 pt-4"> {/* Tambah padding atas */}
                                <button type="submit" disabled={isSubmitting} className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28 disabled:opacity-50">
                                    {isSubmitting ? "Sending..." : "Send"}
                                </button>
                            </ModalFooter>
                        </form>
                    </ModalContent>
                </ModalBody>
            </Modal>
        </div>
    );
}


