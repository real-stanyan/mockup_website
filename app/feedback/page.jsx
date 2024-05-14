import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { Button } from "@/components/ui/button";

const Feedback = () => {
  return (
    <div className="flex flex-col items-center w-[100vw] gap-8 py-[10vw]">
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="name">Your Name</Label>
        <Input type="name" id="name" placeholder="Your Name" />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="email">Your Email</Label>
        <Input type="email" id="email" placeholder="Your Email" />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="suggestion">Your Suggestion</Label>
        <Textarea placeholder="Type your suggestion here." />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="feedback">
          What problem are you trying to solve with this suggestion
        </Label>
        <Textarea placeholder="Type your feedback here." />
      </div>
      <Button type="submit">Submit</Button>
    </div>
  );
};

export default Feedback;
