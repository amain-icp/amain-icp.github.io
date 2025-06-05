// GA4 Event Types
export const GA_EVENTS = {
  PAGE_VIEW: 'page_view',
  BUTTON_CLICK: 'button_click',
  FORM_SUBMIT: 'form_submit',
  PRODUCT_VIEW: 'product_view',
  ADD_TO_CART: 'add_to_cart',
  PURCHASE: 'purchase',
  SEARCH: 'search',
  USER_REGISTER: 'user_register',
  CONTENT_VIEW: 'content_view',
} as const;

// GA4 Event Parameters
export const GA_PARAMS = {
  PAGE_TITLE: 'page_title',
  PAGE_LOCATION: 'page_location',
  PAGE_PATH: 'page_path',
  PRODUCT_ID: 'product_id',
  PRODUCT_NAME: 'product_name',
  PRODUCT_PRICE: 'price',
  SEARCH_TERM: 'search_term',
  USER_ID: 'user_id',
  CONTENT_ID: 'content_id',
  CONTENT_TYPE: 'content_type',
} as const;

// Track page view
export const trackPageView = (path: string, title: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', GA_EVENTS.PAGE_VIEW, {
      page_title: title,
      page_location: window.location.href,
      page_path: path,
    });
  }
};

// Track button click
export const trackButtonClick = (buttonName: string, buttonId?: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', GA_EVENTS.BUTTON_CLICK, {
      button_name: buttonName,
      button_id: buttonId,
    });
  }
};

// Track form submission
export const trackFormSubmit = (formName: string, formId?: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', GA_EVENTS.FORM_SUBMIT, {
      form_name: formName,
      form_id: formId,
    });
  }
};

// Track product view
export const trackProductView = (productId: string, productName: string, price: number) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', GA_EVENTS.PRODUCT_VIEW, {
      product_id: productId,
      product_name: productName,
      price: price,
    });
  }
};

// Track search
export const trackSearch = (searchTerm: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', GA_EVENTS.SEARCH, {
      search_term: searchTerm,
    });
  }
};

// Track user registration
export const trackUserRegister = (userId: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', GA_EVENTS.USER_REGISTER, {
      user_id: userId,
    });
  }
};

// Track content view
export const trackContentView = (contentId: string, contentType: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', GA_EVENTS.CONTENT_VIEW, {
      content_id: contentId,
      content_type: contentType,
    });
  }
}; 