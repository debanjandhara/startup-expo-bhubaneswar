
import React from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const AuthButton: React.FC = () => {
  const { toast } = useToast();
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const handleAuth = () => {
    if (isLoggedIn) {
      // Placeholder for logout functionality
      setIsLoggedIn(false);
      toast({
        title: "Logged out",
        description: "You have been successfully logged out",
      });
    } else {
      // Placeholder for login functionality
      toast({
        title: "Supabase Not Connected",
        description: "Please connect your project to Supabase to enable authentication features",
        variant: "destructive"
      });
    }
  };

  return (
    <Button 
      variant={isLoggedIn ? "outline" : "default"}
      onClick={handleAuth}
      className="ml-4"
    >
      {isLoggedIn ? "Logout" : "Login"}
    </Button>
  );
};

export default AuthButton;
