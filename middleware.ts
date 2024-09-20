import { NextRequest, NextResponse } from "next/server";
import Negotiator from 'negotiator';
import { match } from "@formatjs/intl-localematcher";

//supported languages
const locales = ['en', 'bn'];
const defaultLocale = 'en';

//function to get locale from request
function getLocale(request: NextRequest): string | undefined {
    const headers = request.headers.get('accept-language') as string;
    const languages = new Negotiator({ headers: { 'accept-language': headers } }).languages();
    const locale = match(languages, locales, defaultLocale)

    return locale;
};

export function middleware(request: NextRequest,) {
    const { pathname } = request.nextUrl;
    const pathnameHasLocale = locales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`);

    if (pathnameHasLocale) {
        return;
    }

    const locale = getLocale(request);

    request.nextUrl.pathname = `/${locale}/${pathname}`;

    return NextResponse.redirect(request.nextUrl);
}

export const config = {
    // Matcher ignoring `/_next/` and `/api/`
    matcher: ["/((?!api|_next/static|_next/images|images|favicon.ico).*)"],
};