import { SignUp } from '@clerk/nextjs';
import Link from 'next/link';

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-md">
        <SignUp 
          routing="path"
          path="/sign-up"
          signInUrl="/sign-in"
          fallbackRedirectUrl="/"
          appearance={{
            elements: {
              rootBox: "w-full",
              card: "bg-card rounded-lg shadow-lg border border-border",
              headerTitle: "font-heading text-2xl font-bold text-foreground",
              headerSubtitle: "text-muted-foreground",
              dividerLine: "bg-border",
              dividerText: "text-muted-foreground",
              formFieldLabel: "text-foreground font-medium",
              formFieldInput: "bg-input border border-border text-foreground placeholder-muted-foreground rounded-md",
              formButtonPrimary: "bg-primary hover:bg-primary/90 text-primary-foreground",
              footerActionLink: "text-primary hover:text-primary/80",
              socialButtonsBlockButton: "border border-border text-foreground hover:bg-muted",
              socialButtonsBlockButtonText: "text-foreground font-medium",
              formFieldInput__emailAddress: "bg-input border border-border text-foreground",
            }
          }}
        />
        <p className="text-center mt-4 text-sm text-muted-foreground">
          Already have an account?{' '}
          <Link href="/sign-in" className="text-primary hover:text-primary/80 font-medium">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
