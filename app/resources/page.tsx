import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Download,
  Users,
  Heart,
  FileText,
  Headphones,
  Video,
} from "lucide-react";
import Image from "next/image";

export default function ResourcesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-amber-600 to-amber-700">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Spiritual Resources
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Access helpful resources for your spiritual growth and academic
              journey
            </p>
          </div>
        </div>
      </section>

      {/* Featured Resource */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <Image
                    src="/liberary.jpeg?height=300&width=400"
                    alt="Bible, sermon, or digital downloads image"
                    width={400}
                    height={300}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="text-sm text-amber-600 font-semibold mb-2">
                    FEATURED RESOURCE
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    MFM Books Liberary
                  </h2>
                  <p className="text-gray-600 mb-6">
                    A comprehensive and interesting books, devotional guildes
                    and prayer booklets specifically designed for university
                    students. Each day includes scripture reading, reflection
                    questions, and practical applications for campus life.
                  </p>
                  <div className="flex items-center text-gray-600 mb-6">
                    <Download className="w-4 h-4 mr-2" />
                    <span>Free PDF Download • </span>
                  </div>
                  <Button className="bg-amber-600 hover:bg-amber-700">
                    Download Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Resource Categories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our collection of spiritual resources designed to support
              your faith journey
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-amber-600" />
                </div>
                <CardTitle>Bible Study Materials</CardTitle>
                <CardDescription>
                  Study guides and devotional materials
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Access comprehensive Bible study guides, devotionals, and
                  scripture memory tools designed for students.
                </p>
                <ul className="text-sm text-gray-600 space-y-1 mb-4">
                  <li>• Weekly study guides</li>
                  <li>• Daily devotionals</li>
                  <li>• Scripture memory cards</li>
                  <li>• Topical studies</li>
                </ul>
                <Button variant="outline" className="w-full">
                  Browse Materials
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <Headphones className="w-6 h-6 text-amber-600" />
                </div>
                <CardTitle>Audio Sermons</CardTitle>
                <CardDescription>
                  Inspiring messages and teachings
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Listen to powerful sermons and teachings from our pastors and
                  guest speakers, available for download or streaming.
                </p>
                <ul className="text-sm text-gray-600 space-y-1 mb-4">
                  <li>• Sunday sermons</li>
                  <li>• Bible study recordings</li>
                  <li>• Conference messages</li>
                  <li>• Testimonies</li>
                </ul>
                <Button variant="outline" className="w-full">
                  Listen Now
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <Video className="w-6 h-6 text-amber-600" />
                </div>
                <CardTitle>Video Resources</CardTitle>
                <CardDescription>
                  Visual teachings and testimonies
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Watch inspiring video content including teachings,
                  testimonies, and fellowship highlights from our community.
                </p>
                <ul className="text-sm text-gray-600 space-y-1 mb-4">
                  <li>• Teaching videos</li>
                  <li>• Testimony videos</li>
                  <li>• Event highlights</li>
                  <li>• Worship sessions</li>
                </ul>
                <Button variant="outline" className="w-full">
                  Watch Videos
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Digital Library */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Digital Library
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <FileText className="w-8 h-8 text-amber-600 mr-3" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Prayer Guide
                    </h3>
                    <p className="text-sm text-gray-600">PDF • 45 pages</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Comprehensive guide to effective prayer for students
                </p>
                <Button size="sm" variant="outline" className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <BookOpen className="w-8 h-8 text-amber-600 mr-3" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Faith & Studies
                    </h3>
                    <p className="text-sm text-gray-600">PDF • 32 pages</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Balancing academic excellence with spiritual growth
                </p>
                <Button size="sm" variant="outline" className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <Heart className="w-8 h-8 text-amber-600 mr-3" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Relationship Guide
                    </h3>
                    <p className="text-sm text-gray-600">PDF • 28 pages</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Biblical principles for healthy relationships
                </p>
                <Button size="sm" variant="outline" className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <Users className="w-8 h-8 text-amber-600 mr-3" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Leadership Manual
                    </h3>
                    <p className="text-sm text-gray-600">PDF • 67 pages</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Developing Christian leadership skills
                </p>
                <Button size="sm" variant="outline" className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Online Tools */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Online Tools
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="w-5 h-5 mr-2 text-amber-600" />
                    Bible Reading Plan
                  </CardTitle>
                  <CardDescription>
                    Follow a structured plan to read through the Bible in one
                    year
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Stay on track with daily Bible reading using our interactive
                    reading plan with progress tracking and reminders.
                  </p>
                  <Button className="w-full bg-amber-600 hover:bg-amber-700">
                    Start Reading Plan
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Heart className="w-5 h-5 mr-2 text-amber-600" />
                    Prayer Request Portal
                  </CardTitle>
                  <CardDescription>
                    Submit prayer requests and receive support from our
                    community
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Share your prayer needs confidentially and receive prayer
                    support from our fellowship community.
                  </p>
                  <Button className="w-full bg-amber-600 hover:bg-amber-700">
                    Submit Request
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Request */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Need a Specific Resource?
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Can't find what you're looking for? Let us know what spiritual
              resources would help you in your faith journey, and we'll do our
              best to provide them.
            </p>
            <Button
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3"
            >
              Request Resource
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
