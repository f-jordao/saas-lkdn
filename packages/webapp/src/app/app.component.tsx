import { TenantUserRole } from '@sb/webapp-api-client';
import { DemoItem, DemoItems, PrivacyPolicy, TermsAndConditions } from '@sb/webapp-contentful/routes';
import { DEFAULT_LOCALE, translationMessages } from '@sb/webapp-core/config/i18n';
import { CrudDemoItem } from '@sb/webapp-crud-demo/routes';
import { Documents } from '@sb/webapp-documents/routes';
import { ActiveSubscriptionContext } from '@sb/webapp-finances/components/activeSubscriptionContext';
import {
  CancelSubscription,
  CurrentSubscriptionContent,
  EditPaymentMethod,
  EditSubscription,
  PaymentConfirm,
  PaymentMethodContent,
  Subscriptions,
  TransactionHistory,
  TransactionsHistoryContent,
} from '@sb/webapp-finances/routes';
import { SaasIdeas } from '@sb/webapp-generative-ai/routes';
import { TenantAuthRoute } from '@sb/webapp-tenants/components/routes/tenantAuthRoute';
import {
  AddTenantForm,
  TenantGeneralSettings,
  TenantInvitation,
  TenantMembers,
  TenantSettings,
} from '@sb/webapp-tenants/routes';
import { IntlProvider } from 'react-intl';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

import { Role } from '../modules/auth/auth.types';
import { Admin } from '../routes/admin';
import { PasswordReset } from '../routes/auth/passwordReset';
import ValidateOtp from '../routes/auth/validateOtp';
import { AnonymousRoute, AuthRoute } from '../shared/components/routes';
import { ConfirmEmail, Home, Login, Logout, NotFound, Profile, Signup, Landing } from './asyncComponents';
import { LANG_PREFIX, RoutesConfig, TENANT_PREFIX } from './config/routes';
import { ValidRoutesProviders } from './providers';

export const App = () => {
  return (
    <Routes>
      <Route path={LANG_PREFIX}>
        <Route index element={<Landing />} />
      </Route>

      <Route element={<ValidRoutesProviders />}>
        <Route path={LANG_PREFIX}>
          <Route element={<AnonymousRoute />}>
            <Route path={RoutesConfig.signup} element={<Signup />} />
            <Route path={RoutesConfig.login} element={<Login />} />
            <Route path={RoutesConfig.validateOtp} element={<ValidateOtp />} />
          </Route>

          <Route path={TENANT_PREFIX} element={<AuthRoute />}>
            {/* ... rest of your authenticated routes ... */}
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
