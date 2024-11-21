import { Link } from '@sb/webapp-core/components/buttons';
import { H3, Small } from '@sb/webapp-core/components/typography';
import { useGenerateLocalePath, useBranding } from '@sb/webapp-core/hooks';
import { Helmet } from 'react-helmet-async';
import { FormattedMessage, useIntl } from 'react-intl';

import { RoutesConfig } from '../../../app/config/routes';
import { LoginForm } from '../../../shared/components/auth/loginForm';
import { SocialLoginButtons } from '../../../shared/components/auth/socialLoginButtons';
import { SignupButtonsVariant } from '../../../shared/components/auth/socialLoginButtons/socialLoginButtons.component';

export const Login = () => {
  const generateLocalePath = useGenerateLocalePath();
  const { product, visual } = useBranding();
  const intl = useIntl();

  const pageTitle = intl.formatMessage(
    { 
      defaultMessage: "{appName} | Login",
      id: "Login / Head / Title" 
    },
    { appName: product.displayName }
  );

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <div className="m-auto flex max-w-xs flex-col items-center justify-center 2xl:mt-32">
        <img src={visual.logo.default} alt={product.displayName} className="h-12 w-auto" />
        <H3 className="mb-8">
          <FormattedMessage defaultMessage="Log in" id="Auth / Login / heading" />
        </H3>

        <SocialLoginButtons variant={SignupButtonsVariant.LOGIN} />

        <Small className="my-4">
          <FormattedMessage defaultMessage="or" id="Auth / Login / or" />
        </Small>

        <LoginForm />

        <div className="mt-8 flex w-full flex-row justify-between">
          <Link to={generateLocalePath(RoutesConfig.passwordReset.index)}>
            <FormattedMessage defaultMessage="Forgot password?" id="Auth / login / reset password link" />
          </Link>

          <Link to={generateLocalePath(RoutesConfig.signup)}>
            <FormattedMessage defaultMessage="Sign up" id="Auth / Login / signup link" />
          </Link>
        </div>
      </div>
    </>
  );
};
