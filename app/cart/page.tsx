"use client"

import Image from "next/image"
import { useState, useEffect, Suspense } from "react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import { useCart } from "@/components/cart-context"
import { courses as allCourses } from "@/app/data/courses"
import CourseCard from "@/components/course-card"
import { Trash } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"

// Extend CartItem type locally to include optional 'type' property
type CartItemWithType = {
  slug: string;
  type?: string;
  [key: string]: any;
};

const countryList: string[] = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic of the", "Congo, Republic of the", "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];

function CartPageContent() {
  const { cart, removeFromCart } = useCart()
  const cartWithType = cart as CartItemWithType[];
  const [promo, setPromo] = useState("")
  const router = useRouter()
  const searchParams = useSearchParams()
  const step = searchParams.get("step")
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => { setHydrated(true); }, []);
  const [deliveryType, setDeliveryType] = useState<'collect' | 'delivery'>("delivery")
  const [country, setCountry] = useState("Singapore")
  const [postal, setPostal] = useState("")
  const [showOptions, setShowOptions] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerPostal, setDrawerPostal] = useState("");
  const [showDeliveryOptions, setShowDeliveryOptions] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedShippingOption, setSelectedShippingOption] = useState('jtexpress');
  const [shippingFee, setShippingFee] = useState(3.75);

  const stepNames = ["Bag", "Deliver/Collect", "Address", "Payment"];
  const stepRoutes = ["/cart", "/cart?step=delivery", "/cart?step=address", "/cart?step=payment"];
  const currentStepIdx = step === "delivery" ? 1 : step === "address" ? 2 : step === "payment" ? 3 : 0;

  const [deliveryForm, setDeliveryForm] = useState<any>(() => {
    if (typeof window !== "undefined") {
      try {
        return JSON.parse(localStorage.getItem("deliveryForm") || "{}")
      } catch {
        return {};
      }
    }
    return {};
  });
  const [billingForm, setBillingForm] = useState<any>(() => {
    if (typeof window !== "undefined") {
      try {
        return JSON.parse(localStorage.getItem("billingForm") || "{}")
      } catch {
        return {};
      }
    }
    return {};
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("deliveryForm", JSON.stringify(deliveryForm));
    }
  }, [deliveryForm]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("billingForm", JSON.stringify(billingForm));
    }
  }, [billingForm]);

  useEffect(() => {
    function checkLogin() {
      setIsLoggedIn(typeof window !== 'undefined' && sessionStorage.getItem('fromLogin') === 'true');
    }
    checkLogin();
    window.addEventListener('storage', checkLogin);
    window.addEventListener('focus', checkLogin);
    return () => {
      window.removeEventListener('storage', checkLogin);
      window.removeEventListener('focus', checkLogin);
    };
  }, []);

  // subtotal calculation moved to top
  const subtotal = cart.reduce((sum, item) => {
    const price = typeof item.price === "string"
      ? parseFloat(item.price.replace(/[^0-9.]/g, ""))
      : item.price;
    return sum + (isNaN(price) ? 0 : price);
  }, 0);

  // Detect if plb-book paperback is in cart
  const hasPLBook = cartWithType.some(item => item.slug?.includes("plb-book") && item.type?.toLowerCase() === "book")

  console.log("Cart contents:", cartWithType);
  console.log("hasPLBook:", hasPLBook);
  useEffect(() => {
    if (hydrated && step === "delivery" && !hasPLBook) {
      router.replace("/cart?step=address");
    }
  }, [hydrated, step, hasPLBook, router]);

  if (hydrated && step === "delivery" && !hasPLBook) {
    return null;
  }

  const shippingOptions = [
    { id: 'jtexpress', label: 'J&T Express [1-3 working day(s)]', price: 3.75 },
    { id: 'aramex', label: 'Aramex Domestic Delivery [1-3 working day(s)]', price: 4.55 },
    { id: 'trax', label: 'Trax Logis [1-2 working day(s)]', price: 4.05 },
  ];

  // Show Delivery/Collect step if step=delivery and hasPLBBook
  if (step === "delivery" && hasPLBook) {
    return (
      <div className="bg-white min-h-screen pt-24">
        <Navbar />
        {/* Stepper goes here */}
        <div className="flex justify-center items-center py-8 border-b border-gray-200">
          {["Bag", "Deliver/Collect", "Address", "Payment"].map((stepName, idx) => {
            // Only allow navigation to previous steps (not future steps)
            const canClick =
              (currentStepIdx === 2 && idx < 2) || // On step 3, allow 0 and 1
              (currentStepIdx === 1 && idx === 0); // On step 2, allow 0
            return (
              <div key={stepName} className="flex items-center">
                <div
                  className={`rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg ${idx === currentStepIdx ? "bg-black text-white" : "bg-gray-200 text-gray-500"} ${canClick ? "cursor-pointer hover:bg-gray-300" : ""}`}
                  onClick={() => {
                    if (canClick) {
                      router.push(stepRoutes[idx]);
                    }
                  }}
                >
                  {idx + 1}
                </div>
                <span className={`ml-2 mr-4 font-medium ${idx === currentStepIdx ? "text-black" : "text-gray-400"}`}>{stepName}</span>
                {idx < 3 && <div className="w-8 h-0.5 bg-gray-200 mx-2" />}
              </div>
            );
          })}
        </div>
        <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Left: Cart Items */}
          <div className="md:col-span-4">
            <h2 className="text-2xl font-bold mb-8">Your Items ({cart.length})</h2>
            {cart.length === 0 ? (
              <div className="text-center text-gray-500 py-12">Your cart is empty.</div>
            ) : (
              cart.map((item) => (
                <div key={item.slug} className="flex items-center border-b border-gray-200 py-4">
                  <div className="w-24 h-20 relative mr-4">
                    <Image src={item.image} alt={item.title} fill className="object-contain rounded bg-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold">{item.title}</div>
                    {item.instructor && <div className="text-gray-500 text-sm mb-1">By {item.instructor}</div>}
                  </div>
                  <div className="flex flex-col items-end">
                    <button className="text-gray-400 hover:text-red-500" onClick={() => removeFromCart(item.slug)}>
                      <Trash className="w-5 h-5" />
                    </button>
                    <div className="font-semibold text-lg mt-8">
                      {`$${(
                        typeof item.price === "number"
                          ? item.price
                          : parseFloat(item.price.replace(/[^0-9.]/g, ""))
                      ).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          {/* Middle: Delivery/Collect Options */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <h2 className="text-2xl font-bold mb-8">Delivery or Click & Collect</h2>
            <div className="flex gap-4">
              {/* Click & Collect Box */}
              <div
                className={`flex-1 border rounded-lg p-6 cursor-pointer ${deliveryType === "collect" ? "border-black" : "border-gray-200"}`}
                onClick={() => setDeliveryType("collect")}
              >
                <div className="flex items-center mb-2">
                  <span className="font-semibold">Click & Collect</span>
                  <span className={`ml-auto w-5 h-5 rounded-full border-2 ${deliveryType === "collect" ? "border-black bg-black" : "border-gray-300"}`}></span>
                </div>
                {/* Pickup info inside box */}
                <div className="mt-4">
                  <div className="font-bold mb-1">Pickup</div>
                  <div className="mb-2">Collection from <span className="font-bold">62 UBI ROAD 1, OXLEY BIZHUB 2, #11-15/18, SINGAPORE, 408734</span></div>
                  <div className="text-green-600 font-semibold">FREE</div>
                </div>
              </div>
              {/* Delivery Box */}
              <div
                className={`flex-1 border rounded-lg p-6 cursor-pointer ${deliveryType === "delivery" ? "border-black" : "border-gray-200"}`}
                onClick={() => setDeliveryType("delivery")}
              >
                <div className="flex items-center mb-2">
                  <span className="font-semibold">Delivery</span>
                  <span className={`ml-auto w-5 h-5 rounded-full border-2 ${deliveryType === "delivery" ? "border-black bg-black" : "border-gray-300"}`}></span>
                </div>
                <div className="text-gray-600 mb-2">Postcode: {postal || "-"}</div>
                <div className="text-gray-600">For shipping options, please enter your postal code.</div>
                <button className="text-blue-700 underline cursor-pointer mt-2" type="button" onClick={() => setDrawerOpen(true)}>
                  Change Delivery Type
                </button>
              </div>
            </div>
            {/* Delivery Details (only show if delivery selected) */}
            {deliveryType === "delivery" && (
              <div className="bg-gray-50 rounded-lg p-6 mb-8 mt-4">
                <h3 className="font-semibold mb-4">Enter Delivery Details</h3>
                <div className="mb-4">
                  <label className="block mb-1 font-medium">Country/Region</label>
                  <select value={country} onChange={e => setCountry(e.target.value)} className="border rounded px-3 py-2 w-full">
                    {countryList.map((c: string) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block mb-1 font-medium">Postal code</label>
                  <input value={postal} onChange={e => setPostal(e.target.value)} className="border rounded px-3 py-2 w-full" />
                </div>
                <button className="bg-black text-white px-4 py-2 rounded" onClick={() => setShowOptions(true)}>Check delivery options</button>
                {showOptions && (
                  <div className="mt-6">
                    <div className="mb-2 font-semibold">Shipping Option</div>
                    {shippingOptions.map(option => (
                      <label key={option.id} className="mb-2 flex items-center cursor-pointer w-full">
                        <input
                          type="radio"
                          name="shipping"
                          checked={selectedShippingOption === option.id}
                          onChange={() => {
                            setSelectedShippingOption(option.id);
                            setShippingFee(option.price);
                          }}
                          className="mr-2"
                        />
                        <span className="flex-1">{option.label}</span>
                        <span className="ml-auto font-semibold">${option.price.toFixed(2)}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
          {/* Right: Order Summary */}
          <div className="md:col-span-4">
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-lg mb-4">Order Summary</h3>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>${subtotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Estimated Shipping</span>
                <span className="text-green-600 font-medium">
                  {deliveryType === "collect" || shippingFee === 0 ? "FREE" : `$${shippingFee.toFixed(2)}`}
                </span>
              </div>
              <div className="text-xs text-gray-500 mb-4">Actual shipping cost is calculated once we know your delivery details</div>
              <div className="flex mb-4">
                <input
                  type="text"
                  placeholder="Enter Promo Code"
                  className="flex-1 border border-gray-300 rounded-l px-3 py-2 text-sm focus:outline-none"
                  value={promo}
                  onChange={e => setPromo(e.target.value)}
                />
                <Button className="rounded-l-none">Apply</Button>
              </div>
              <div className="flex justify-between font-bold text-lg mb-6">
                <span>Total</span>
                <span>
                  ${(subtotal + (deliveryType === "collect" ? 0 : shippingFee)).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  <span className="text-xs font-normal text-gray-500">Including GST</span>
                </span>
              </div>
              <Button
                className="w-full mb-2 bg-black text-white"
                onClick={() => {
                  if (!isLoggedIn) {
                    router.push('/login?redirect=/cart?step=delivery');
                  } else if (step === 'delivery') {
                    router.push('/cart?step=address');
                  } else {
                    router.push('/cart?step=delivery');
                  }
                }}
              >
                {!isLoggedIn ? 'Sign in to checkout' : step === 'delivery' ? 'Next' : 'Next'}
              </Button>
            </div>
          </div>
          {/* Drawer for Delivery Type */}
          {drawerOpen && (
            <div className="fixed inset-0 z-50 flex justify-end">
              <div className="fixed inset-0 bg-black bg-opacity-30" onClick={() => setDrawerOpen(false)}></div>
              <div className="relative w-full max-w-md bg-white h-full shadow-xl p-8 overflow-y-auto">
                <button className="absolute top-4 right-4 text-2xl" onClick={() => setDrawerOpen(false)}>&times;</button>
                <h2 className="text-xl font-bold mb-4">Delivery Type</h2>
                <label className="block mb-1 font-medium">Enter suburb or postcode</label>
                <input
                  value={drawerPostal}
                  onChange={e => setDrawerPostal(e.target.value)}
                  className="border rounded px-3 py-2 w-full mb-4"
                  placeholder="e.g. Melbourne, 3000"
                />
                <button
                  className="bg-black text-white px-4 py-2 rounded w-full mb-4"
                  onClick={() => setShowDeliveryOptions(true)}
                >
                  Show Delivery Options
                </button>
                {showDeliveryOptions && (
                  <div>
                    <div className="mb-4">
                      <div className="border rounded-lg p-4 flex items-center mb-2">
                        <input type="radio" checked readOnly className="mr-2" />
                        <div>
                          <div className="font-semibold">Standard Delivery (2-7 Business Days)</div>
                          <div className="text-gray-500 text-sm">Australia Post (eParcel Delivery)</div>
                        </div>
                        <span className="ml-auto font-semibold">FREE</span>
                      </div>
                      <div className="border rounded-lg p-4 flex items-center mb-2">
                        <input type="radio" className="mr-2" disabled />
                        <div>
                          <div className="font-semibold">Express Delivery (2-4 Business Days)</div>
                          <div className="text-gray-500 text-sm">Australia Post (Express Delivery)</div>
                        </div>
                        <span className="ml-auto text-gray-400">$12.95</span>
                      </div>
                      <div className="border rounded-lg p-4 flex items-center">
                        <input type="radio" className="mr-2" disabled />
                        <div>
                          <div className="font-semibold">Sameday (Metro Areas Only)</div>
                          <div className="text-gray-500 text-sm">For weekday orders placed before 12pm to selected postcodes.</div>
                        </div>
                        <span className="ml-auto text-gray-400">$14.95</span>
                      </div>
                    </div>
                    <button className="bg-black text-white px-4 py-2 rounded w-full" onClick={() => setDrawerOpen(false)}>
                      Confirm
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }

  if (step === "address") {
    return (
      <div className="bg-white min-h-screen pt-24">
        <Navbar />
        {/* Stepper */}
        <div className="flex justify-center items-center py-8 border-b border-gray-200">
          {["Bag", "Deliver/Collect", "Address", "Payment"].map((stepName, idx) => {
            // Only allow navigation to previous steps (not future steps)
            const canClick =
              (currentStepIdx === 2 && idx < 2) || // On step 3, allow 0 and 1
              (currentStepIdx === 1 && idx === 0); // On step 2, allow 0
            return (
              <div key={stepName} className="flex items-center">
                <div
                  className={`rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg ${idx === currentStepIdx ? "bg-black text-white" : "bg-gray-200 text-gray-500"} ${canClick ? "cursor-pointer hover:bg-gray-300" : ""}`}
                  onClick={() => {
                    if (canClick) {
                      router.push(stepRoutes[idx]);
                    }
                  }}
                >
                  {idx + 1}
                </div>
                <span className={`ml-2 mr-4 font-medium ${idx === currentStepIdx ? "text-black" : "text-gray-400"}`}>{stepName}</span>
                {idx < 3 && <div className="w-8 h-0.5 bg-gray-200 mx-2" />}
              </div>
            );
          })}
        </div>
        <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Address Forms */}
          <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Delivery Address */}
            <form className="bg-gray-50 rounded-lg p-6 flex flex-col gap-4">
              <h3 className="font-semibold text-lg mb-2">Delivery Address</h3>
              <div>
                <label className="block mb-1 font-medium">First Name *</label>
                <input className="border rounded px-3 py-2 w-full" required name="firstName" value={deliveryForm.firstName || ""} onChange={e => setDeliveryForm({ ...deliveryForm, firstName: e.target.value })} />
              </div>
              <div>
                <label className="block mb-1 font-medium">Last Name *</label>
                <input className="border rounded px-3 py-2 w-full" required name="lastName" value={deliveryForm.lastName || ""} onChange={e => setDeliveryForm({ ...deliveryForm, lastName: e.target.value })} />
              </div>
              <div>
                <label className="block mb-1 font-medium">Email Address *</label>
                <input type="email" className="border rounded px-3 py-2 w-full" required name="email" value={deliveryForm.email || ""} onChange={e => setDeliveryForm({ ...deliveryForm, email: e.target.value })} />
              </div>
              <div>
                <label className="block mb-1 font-medium">Mobile *</label>
                <input className="border rounded px-3 py-2 w-full" required name="mobile" value={deliveryForm.mobile || ""} onChange={e => setDeliveryForm({ ...deliveryForm, mobile: e.target.value })} />
              </div>
              <div>
                <label className="block mb-1 font-medium">Country *</label>
                <select className="border rounded px-3 py-2 w-full" required name="country" value={deliveryForm.country || ""} onChange={e => setDeliveryForm({ ...deliveryForm, country: e.target.value })}>
                  {countryList.map((c: string) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block mb-1 font-medium">Company</label>
                <input className="border rounded px-3 py-2 w-full" name="company" value={deliveryForm.company || ""} onChange={e => setDeliveryForm({ ...deliveryForm, company: e.target.value })} />
              </div>
              <div>
                <label className="block mb-1 font-medium">Street Address *</label>
                <input className="border rounded px-3 py-2 w-full" required name="streetAddress" value={deliveryForm.streetAddress || ""} onChange={e => setDeliveryForm({ ...deliveryForm, streetAddress: e.target.value })} />
              </div>
              <div>
                <label className="block mb-1 font-medium">Suburb *</label>
                <input className="border rounded px-3 py-2 w-full" required name="suburb" value={deliveryForm.suburb || ""} onChange={e => setDeliveryForm({ ...deliveryForm, suburb: e.target.value })} />
              </div>
              <div>
                <label className="block mb-1 font-medium">State *</label>
                <input className="border rounded px-3 py-2 w-full" required name="state" value={deliveryForm.state || ""} onChange={e => setDeliveryForm({ ...deliveryForm, state: e.target.value })} />
              </div>
              <div>
                <label className="block mb-1 font-medium">Postcode *</label>
                <input className="border rounded px-3 py-2 w-full" required name="postcode" value={deliveryForm.postcode || ""} onChange={e => setDeliveryForm({ ...deliveryForm, postcode: e.target.value })} />
              </div>
              <div className="text-xs text-gray-500 mt-2">
                Your order may be left in a safe place, if not, it will be taken to your local collection point.<br />
                Track and manage your delivery via the relevant app.<br />
                Please see our privacy policy for more information about how we deal with your information.
              </div>
            </form>
            {/* Billing Address */}
            <form className="bg-gray-50 rounded-lg p-6 flex flex-col gap-4">
              <h3 className="font-semibold text-lg mb-2">Billing Address</h3>
              <div className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id="sameAsDelivery"
                  className="mr-2"
                  checked={billingForm.sameAsDelivery || false}
                  onChange={e => {
                    setBillingForm(e.target.checked
                      ? { ...deliveryForm, sameAsDelivery: true }
                      : { ...billingForm, sameAsDelivery: false }
                    );
                  }}
                />
                <label htmlFor="sameAsDelivery" className="text-sm">Same as Delivery Address</label>
              </div>
              {/* Only show the rest of the form if not same as delivery */}
              {!billingForm.sameAsDelivery && (
                <>
                  <div>
                    <label className="block mb-1 font-medium">First Name *</label>
                    <input className="border rounded px-3 py-2 w-full" required name="firstName" value={billingForm.firstName || ""} onChange={e => setBillingForm({ ...billingForm, firstName: e.target.value })} />
                  </div>
                  <div>
                    <label className="block mb-1 font-medium">Last Name *</label>
                    <input className="border rounded px-3 py-2 w-full" required name="lastName" value={billingForm.lastName || ""} onChange={e => setBillingForm({ ...billingForm, lastName: e.target.value })} />
                  </div>
                  <div>
                    <label className="block mb-1 font-medium">Email Address *</label>
                    <input type="email" className="border rounded px-3 py-2 w-full" required name="email" value={billingForm.email || ""} onChange={e => setBillingForm({ ...billingForm, email: e.target.value })} />
                  </div>
                  <div>
                    <label className="block mb-1 font-medium">Mobile *</label>
                    <input className="border rounded px-3 py-2 w-full" required name="mobile" value={billingForm.mobile || ""} onChange={e => setBillingForm({ ...billingForm, mobile: e.target.value })} />
                  </div>
                  <div>
                    <label className="block mb-1 font-medium">Country *</label>
                    <select className="border rounded px-3 py-2 w-full" required name="country" value={billingForm.country || ""} onChange={e => setBillingForm({ ...billingForm, country: e.target.value })}>
                      {countryList.map((c: string) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block mb-1 font-medium">Company</label>
                    <input className="border rounded px-3 py-2 w-full" name="company" value={billingForm.company || ""} onChange={e => setBillingForm({ ...billingForm, company: e.target.value })} />
                  </div>
                  <div>
                    <label className="block mb-1 font-medium">Street Address *</label>
                    <input className="border rounded px-3 py-2 w-full" required name="streetAddress" value={billingForm.streetAddress || ""} onChange={e => setBillingForm({ ...billingForm, streetAddress: e.target.value })} />
                  </div>
                  <div>
                    <label className="block mb-1 font-medium">Suburb *</label>
                    <input className="border rounded px-3 py-2 w-full" required name="suburb" value={billingForm.suburb || ""} onChange={e => setBillingForm({ ...billingForm, suburb: e.target.value })} />
                  </div>
                  <div>
                    <label className="block mb-1 font-medium">State *</label>
                    <input className="border rounded px-3 py-2 w-full" required name="state" value={billingForm.state || ""} onChange={e => setBillingForm({ ...billingForm, state: e.target.value })} />
                  </div>
                  <div>
                    <label className="block mb-1 font-medium">Postcode *</label>
                    <input className="border rounded px-3 py-2 w-full" required name="postcode" value={billingForm.postcode || ""} onChange={e => setBillingForm({ ...billingForm, postcode: e.target.value })} />
                  </div>
                </>
              )}
            </form>
          </div>
          {/* Order Summary */}
          <div className="md:col-span-4">
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-lg mb-4">Order Summary</h3>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>${subtotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Estimated Shipping</span>
                <span className="text-green-600 font-medium">FREE</span>
              </div>
              <div className="text-xs text-gray-500 mb-4">Actual shipping cost is calculated once we know your delivery details</div>
              <div className="flex mb-4">
                <input
                  type="text"
                  placeholder="Enter Promo Code"
                  className="flex-1 border border-gray-300 rounded-l px-3 py-2 text-sm focus:outline-none"
                  value={promo}
                  onChange={e => setPromo(e.target.value)}
                />
                <Button className="rounded-l-none">Apply</Button>
              </div>
              <div className="flex justify-between font-bold text-lg mb-6">
                <span>Total</span>
                <span>${subtotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} <span className="text-xs font-normal text-gray-500">Including GST</span></span>
              </div>
              <Button className="w-full mb-2 bg-black text-white" onClick={() => router.push('/cart?step=payment')}>
                Continue to Payment
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (step === "payment") {
    return (
      <div className="bg-gray-50 min-h-screen pt-24">
        <Navbar />
        {/* Stepper */}
        <div className="flex justify-center items-center py-8 border-b border-gray-200">
          {["Bag", "Deliver/Collect", "Address", "Payment"].map((stepName, idx) => {
            const canClick = false;
            return (
              <div key={stepName} className="flex items-center">
                <div
                  className={`rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg ${idx === 3 ? "bg-black text-white" : "bg-gray-200 text-gray-500"}`}
                >
                  {idx + 1}
                </div>
                <span className={`ml-2 mr-4 font-medium ${idx === 3 ? "text-black" : "text-gray-400"}`}>{stepName}</span>
                {idx < 3 && <div className="w-8 h-0.5 bg-gray-200 mx-2" />}
              </div>
            );
          })}
        </div>
        <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Payment Method */}
          <div className="md:col-span-4">
            <div className="bg-white rounded-xl shadow p-6 mb-6">
              <h2 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <span>Payment Method</span>
                <span className="flex gap-1 ml-2">
                  <img src="/visa.svg" alt="Visa" className="h-5" />
                  <img src="/mastercard.svg" alt="MasterCard" className="h-5" />
                  <img src="/amex.svg" alt="Amex" className="h-5" />
                </span>
              </h2>
              <div className="space-y-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="payment" defaultChecked /> Debit or Credit Card
                </label>
                <div className="bg-gray-50 rounded-lg p-4 flex flex-col gap-2 shadow-inner">
                  <div className="flex items-center border rounded px-3 py-2 bg-white">
                    <span className="mr-2 text-gray-400">
                      <svg width="20" height="20" fill="none"><circle cx="10" cy="10" r="9" stroke="#ccc" strokeWidth="2" /></svg>
                    </span>
                    <input className="flex-1 outline-none" placeholder="Card Number *" />
                  </div>
                  <input className="border rounded px-3 py-2" placeholder="Card Name *" />
                  <div className="flex gap-2">
                    <input className="border rounded px-3 py-2 w-1/2" placeholder="MM" />
                    <input className="border rounded px-3 py-2 w-1/2" placeholder="YYYY" />
                  </div>
                  <input className="border rounded px-3 py-2" placeholder="CVC *" />
                </div>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="payment" /> PayPal <img src="/paypal.svg" alt="PayPal" className="h-5 ml-1" />
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="payment" /> Afterpay <img src="/afterpay.svg" alt="Afterpay" className="h-5 ml-1" />
                </label>
              </div>
            </div>
          </div>
          {/* Review Address */}
          <div className="md:col-span-4">
            <div className="bg-white rounded-xl shadow p-6 mb-6">
              <h2 className="font-semibold text-lg mb-4">Review Address</h2>
              <div className="flex justify-between items-center mb-2">
                <div className="font-semibold">Delivery & Billing Address</div>
                <button
                  className="text-blue-600 hover:underline flex items-center gap-1 text-sm"
                  onClick={() => router.push('/cart?step=address')}
                >
                  <svg width="16" height="16" fill="none"><rect x="2" y="7" width="12" height="2" fill="#2563eb" /><rect x="7" y="2" width="2" height="12" fill="#2563eb" /></svg> Edit
                </button>
              </div>
              <div>
                <div className="font-bold">PEI YEE TAN</div>
                <div>peyee.1104@gmail.com</div>
                <div>81275457</div>
                <div>Unit 2 72 Hebe St, QLD, BARDON, 4065</div>
              </div>
            </div>
          </div>
          {/* Order Summary */}
          <div className="md:col-span-4">
            <div className="bg-white rounded-xl shadow p-6 mb-6">
              <h2 className="font-semibold text-lg mb-4">Order Summary</h2>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Total Shipping</span>
                <span>${shippingFee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold text-2xl mb-6">
                <span>Total</span>
                <span>${(subtotal + shippingFee).toFixed(2)}</span>
              </div>
              <button className="w-full bg-black text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 text-lg">
                <svg width="20" height="20" fill="none"><circle cx="10" cy="10" r="9" stroke="#fff" strokeWidth="2" /><path d="M7 10l2 2 4-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                Place Order Securely
              </button>
              <div className="text-xs text-gray-500 mt-2">
                By clicking Place Order Securely you confirm that you have read, understand and accept our <a href="#" className="underline">terms and conditions</a>, <a href="#" className="underline">returns policy</a> and <a href="#" className="underline">privacy policy</a>.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const recommendations = allCourses.filter(
    (course) => !cart.some((item) => item.slug === course.slug)
  ).slice(0, 4)

  return (
    <div className="bg-white min-h-screen pt-24">
      <Navbar />
      {/* Progress Steps */}
      <div className="flex justify-center items-center py-8 border-b border-gray-200">
        {["Bag", "Deliver/Collect", "Address", "Payment"].map((stepName, idx) => {
          // Only allow navigation to previous steps (not future steps)
          const canClick =
            (currentStepIdx === 2 && idx < 2) || // On step 3, allow 0 and 1
            (currentStepIdx === 1 && idx === 0); // On step 2, allow 0
          return (
            <div key={stepName} className="flex items-center">
              <div
                className={`rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg ${idx === currentStepIdx ? "bg-black text-white" : "bg-gray-200 text-gray-500"} ${canClick ? "cursor-pointer hover:bg-gray-300" : ""}`}
                onClick={() => {
                  if (canClick) {
                    router.push(stepRoutes[idx]);
                  }
                }}
              >
                {idx + 1}
              </div>
              <span className={`ml-2 mr-4 font-medium ${idx === currentStepIdx ? "text-black" : "text-gray-400"}`}>{stepName}</span>
              {idx < 3 && <div className="w-8 h-0.5 bg-gray-200 mx-2" />}
            </div>
          );
        })}
      </div>

      {/* Header row with Shopping Bag and Continue Shopping */}
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-start justify-between mb-2 pb-6 pt-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">Shopping Bag</h2>
          <p className="text-gray-600 mb-6">You'll be able to select delivery or click & collect once you proceed to checkout</p>
        </div>
        <div className="flex flex-col items-center w-full lg:w-auto mt-2 lg:mt-0">
          <a href="/courses" className="text-sm underline text-red-600">Continue Shopping</a>
        </div>
      </div>
      <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-8 items-start">
        {/* Shopping Bag */}
        <div className="flex-1">
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="font-semibold text-lg mb-4">Your Items ({cart.length})</h3>
            {cart.length === 0 ? (
              <div className="text-center text-gray-500 py-12">Your cart is empty.</div>
            ) : (
              cart.map((item) => (
                <div key={item.slug} className="flex items-center border-b border-gray-200 py-4">
                  <div className="w-56 h-40 relative mr-6">
                    <Image src={item.image} alt={item.title} fill className="object-contain rounded bg-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold">{item.title}</div>
                    {item.instructor && <div className="text-gray-500 text-sm mb-1">By {item.instructor}</div>}
                  </div>
                  <div className="flex flex-col items-end">
                    <button className="text-gray-400 hover:text-red-500" onClick={() => removeFromCart(item.slug)}>
                      <Trash className="w-5 h-5" />
                    </button>
                    <div className="font-semibold text-lg mt-8">
                      {`$${(
                        typeof item.price === "number"
                          ? item.price
                          : parseFloat(item.price.replace(/[^0-9.]/g, ""))
                      ).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-96 flex flex-col">
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="font-semibold text-lg mb-4">Order Summary</h3>
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>${subtotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Estimated Shipping</span>
              <span className="text-green-600 font-medium">FREE</span>
            </div>
            <div className="text-xs text-gray-500 mb-4">Actual shipping cost is calculated once we know your delivery details</div>
            <div className="flex mb-4">
              <input
                type="text"
                placeholder="Enter Promo Code"
                className="flex-1 border border-gray-300 rounded-l px-3 py-2 text-sm focus:outline-none"
                value={promo}
                onChange={e => setPromo(e.target.value)}
              />
              <Button className="rounded-l-none">Apply</Button>
            </div>
            <div className="flex justify-between font-bold text-lg mb-6">
              <span>Total</span>
              <span>${subtotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} <span className="text-xs font-normal text-gray-500">Including GST</span></span>
            </div>
            <Button
              className="w-full mb-2 bg-black text-white"
              onClick={() => {
                if (!isLoggedIn) {
                  router.push('/login?redirect=/cart?step=delivery');
                } else if (step === 'delivery') {
                  router.push('/cart?step=address');
                } else {
                  router.push('/cart?step=delivery');
                }
              }}
            >
              {!isLoggedIn ? 'Sign in to checkout' : step === 'delivery' ? 'Next' : 'Next'}
            </Button>
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div className="container mx-auto px-4 pb-16">
        <h3 className="text-center text-lg font-semibold mb-8 mt-12">YOU MIGHT ALSO LIKE</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {recommendations.map((course, idx) => (
            <CourseCard key={course.slug} course={course} delay={idx * 0.1} size="small" />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function CartPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CartPageContent />
    </Suspense>
  )
}
