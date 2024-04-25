import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isMainRoute = createRouteMatcher(['/']);

export default clerkMiddleware(
  (auth, req) => {
    if (isMainRoute(req) && !auth().userId) {
      auth().redirectToSignIn();
    }
  },
  {
    afterSignInUrl: '/',
    afterSignUpUrl: '/',
  }
);

export const config = {
  matcher: ['/((?!.+.[w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
