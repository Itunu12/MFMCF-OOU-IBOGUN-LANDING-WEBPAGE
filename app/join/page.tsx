import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Users, Heart, BookOpen } from "lucide-react";
import Image from "next/image";

export default function JoinPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-amber-600 to-amber-700">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our Fellowship
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Become part of a vibrant community of students passionate about
              following Jesus Christ
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Why Join MFMCF?
                </h2>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  Are you a student at OOU Ibogun looking for a spiritual home?
                  We welcome you with open arms! Join our vibrant community of
                  believers and experience the joy of Christian fellowship,
                  spiritual growth, and academic support.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-amber-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Spiritual Growth
                      </h3>
                      <p className="text-gray-600">
                        Deepen your relationship with God through Bible study
                        and prayer
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-amber-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Academic Support
                      </h3>
                      <p className="text-gray-600">
                        Get study groups, mentorship, and academic prayer
                        support
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-amber-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Lasting Friendships
                      </h3>
                      <p className="text-gray-600">
                        Build meaningful relationships with like-minded students
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-amber-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Leadership Development
                      </h3>
                      <p className="text-gray-600">
                        Develop your leadership skills through various
                        opportunities
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/join-us.png?height=500&width=600"
                  alt="Smiling students holding hands in prayer"
                  width={600}
                  height={500}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Membership Benefits */}
            <div className="bg-gray-50 rounded-lg p-8 md:p-12 mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Membership Benefits
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-8 h-8 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Bible Study Materials
                  </h3>
                  <p className="text-gray-600">
                    Access to exclusive study guides, devotionals, and spiritual
                    resources
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Small Groups
                  </h3>
                  <p className="text-gray-600">
                    Join intimate fellowship groups for deeper connections and
                    accountability
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Prayer Support
                  </h3>
                  <p className="text-gray-600">
                    24/7 prayer support network for personal and academic
                    challenges
                  </p>
                </div>
              </div>
            </div>

            {/* Registration Form */}
            <div className="max-w-2xl mx-auto">
              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Join Us Today</CardTitle>
                  <CardDescription>
                    Fill out this form to become a member of MFMCF OOU Ibogun
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form
                    action="https://formspree.io/f/moqgwlka"
                    method="POST"
                    className="space-y-6"
                  >
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="firstName"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          First Name
                        </label>
                        <Input
                          id="firstName"
                          name="firstName"
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="lastName"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Last Name
                        </label>
                        <Input
                          id="lastName"
                          name="lastName"
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email Address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Enter your email address"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="department"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Department/Faculty
                      </label>
                      <Input
                        id="department"
                        name="department"
                        placeholder="Enter your department"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="level"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Academic Level
                      </label>
                      <Input
                        id="level"
                        name="Level"
                        placeholder="e.g., 100L, 200L, 300L"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="testimony"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Brief Testimony (Optional)
                      </label>
                      <Textarea
                        id="testimony"
                        name="testimony"
                        placeholder="Share a brief testimony or why you want to join"
                        rows={4}
                      />
                    </div>
                    <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3">
                      Submit Application
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
