
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from '@/contexts/AuthContext';
import { LogIn, LogOut } from 'lucide-react';
import AuthDialog from '@/components/auth/AuthDialog';

const AuthButton: React.FC = () => {
  const { toast } = useToast();
  const { user, signOut } = useAuth();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleAuth = () => {
    if (user) {
      signOut();
    } else {
      setIsDialogOpen(true);
    }
  };

  return (
    <>
      <Button 
        variant={user ? "outline" : "default"}
        onClick={handleAuth}
        className="ml-4 flex gap-2 items-center"
      >
        {user ? (
          <>
            <LogOut size={16} />
            <span>Logout</span>
          </>
        ) : (
          <>
            <LogIn size={16} />
            <span>Login</span>
          </>
        )}
      </Button>
      <AuthDialog isOpen={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </>
  );
};

export default AuthButton;
