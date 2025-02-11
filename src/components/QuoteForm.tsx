"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { DialogTitle } from "@/components/ui/dialog";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "./ui/Button";

const services = [
  "Web Development",
  "Vinyl Printing",
  "Social Media Management",
  "Website Revamping",
  "Website Maintenance",
  "Corporate Branding",
  "Large Format Printing",
  "Designs",
];

export function QuoteForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, selectedServices }),
      });

      if (response.ok) {
        toast({
          title: "Quote Request Sent",
          description: "We'll get back to you with a formal quote soon.",
        });
        setName("");
        setEmail("");
        setMessage("");
        setSelectedServices([]);
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.log(error);
      toast({
        title: "Error",
        description: "Failed to send quote request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="border-none shadow-none">
      <CardHeader>
        <DialogTitle asChild>
          <CardTitle>Request a Quote</CardTitle>
        </DialogTitle>
        <CardDescription>
          Fill out the form below and we&apos;ll get back to you with a custom
          quote.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col space-y-2">
              <Label>Services</Label>
              <div className="grid grid-cols-2 gap-2">
                {services.map((service) => (
                  <div key={service} className="flex items-center space-x-2">
                    <Checkbox
                      id={service}
                      checked={selectedServices.includes(service)}
                      onCheckedChange={(checked) => {
                        setSelectedServices(
                          checked
                            ? [...selectedServices, service]
                            : selectedServices.filter((s) => s !== service)
                        );
                      }}
                    />
                    <label
                      htmlFor={service}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {service}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full"
        >
          <Button
            type="submit"
            disabled={isSubmitting}
            onClick={handleSubmit}
            className="w-full rounded-full"
          >
            {isSubmitting ? (
              <motion.div
                animate={{
                  x: [0, 10, 0],
                }}
                transition={{
                  duration: 1,
                  repeat: Number.POSITIVE_INFINITY,
                }}
              >
                <Send className="mr-2 h-4 w-4" />
              </motion.div>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Get Quote
              </>
            )}
          </Button>
        </motion.div>
      </CardFooter>
    </Card>
  );
}
