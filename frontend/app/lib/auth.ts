import NextAuth from "next-auth";
import Auth0 from "@auth/core/providers/auth0";

export const { handlers, auth } = NextAuth({
  providers: [
    {
      id: "spring-google", // signIn("my-provider") and will be part of the callback URL
      name: "Spring Google", // optional, used on the default login page as the button text.
      type: "oauth", // or "oauth" for OAuth 2 providers
      issuer: "https://my.oidc-provider.com", // to infer the .well-known/openid-configuration URL
      clientId: process.env.AUTH_CLIENT_ID, // from the provider's dashboard
      clientSecret: process.env.AUTH_CLIENT_SECRET, // from the provider's dashboard
    }
  ],
})