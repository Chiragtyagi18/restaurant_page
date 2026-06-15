import { SignIn } from '@clerk/nextjs';
import Link from 'next/link';

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-md">
        <SignIn 
          routing="path"
          path="/sign-in"
          signUpUrl="/sign-up"
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
          Don&apos;t have an account?{' '}
          <Link href="/sign-up" className="text-primary hover:text-primary/80 font-medium">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
