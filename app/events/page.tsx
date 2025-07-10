import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Users, Heart, BookOpen } from "lucide-react";
import Image from "next/image";

export default function EventsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-amber-600 to-amber-700">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Fellowship Events
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Join us for exciting events as we grow together in faith and
              fellowship
            </p>
          </div>
        </div>
      </section>

      {/* Featured Event */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <Image
                    src="/Prayer-conf.png?height=300&width=400"
                    alt="Fellowship event photo"
                    width={400}
                    height={300}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="text-sm text-amber-600 font-semibold mb-2">
                    FEATURED EVENT
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Annual Prayer Conference
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Join us for a powerful time of worship, prayer, and
                    spiritual renewal. This special event brings together
                    students from across the campus for an unforgettable
                    experience with God.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>Every Year</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>5:00 PM</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>MFMCF Auditorium</span>
                    </div>
                  </div>
                  <Button className="bg-amber-600 hover:bg-amber-700">
                    Register Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regular Events */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Regular Events
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join us weekly for these regular fellowship activities
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-amber-600" />
                </div>
                <CardTitle>Weekly Bible Study</CardTitle>
                <CardDescription>Every Tuesday, 5:00 PM</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Join us for in-depth Bible study sessions where we explore
                  God's Word together and apply biblical principles to our daily
                  lives as students.
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <MapPin className="w-4 h-4 mr-1" />
                  MFMCF Auditorium
                </div>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div
                  className="w-12 h-12 bg-amber-100 rounded-lg flex
                items-center justify-center mb-4"
                >
                  <Heart className="w-6 h-6 text-amber-600" />
                </div>
                <CardTitle>Weekly Prayer Meeting</CardTitle>
                <CardDescription>Every Thursday, 5:30 PM</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Join us for Intesive prayer charge, fortification with fire
                  and deep comunication with God,
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <MapPin className="w-4 h-4 mr-1" />
                  MFMCF Auditorium
                </div>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-amber-600" />
                </div>
                <CardTitle>Campus Outreach</CardTitle>
                <CardDescription>Every Friday, 4:00 PM</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Reach out to fellow students across campus with the message of
                  hope and salvation. Be part of spreading God's love throughout
                  OOU Ibogun.
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <MapPin className="w-4 h-4 mr-1" />
                  Campus Grounds
                </div>
                <Button variant="outline" className="w-full">
                  Join Outreach
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-amber-600" />
                </div>
                <CardTitle>Brother's Prayer</CardTitle>
                <CardDescription>
                  Every Last Sunday Of The Month, 7:00 PM
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Experience the power of corporate prayer with the brothers as
                  we come together as one to pray think, teach and learn from
                  each other and seek the face of God for guidiance and help.
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Clock className="w-4 h-4 mr-1" />1 hours
                </div>
                <Button variant="outline" className="w-full">
                  Join Prayer
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-amber-600" />
                </div>
                <CardTitle>Word Study</CardTitle>
                <CardDescription>Every Friday, 4:00 PM</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Experience the power of group's Bible study with the gathering
                  of the brethren join us as we come together to study God's
                  word in spirit and in understanding.
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Clock className="w-4 h-4 mr-1" />2 hours
                </div>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-amber-600" />
                </div>
                <CardTitle>6 Hours With God</CardTitle>
                <CardDescription>Every Month, 10:00 PM</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Experience the power of corporate prayer and worship as we
                  come together to seek God's face and intercede for our campus
                  and nation.
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Clock className="w-4 h-4 mr-1" />6 hours
                </div>
                <Button variant="outline" className="w-full">
                  Join Prayer
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Upcoming Events Calendar */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Upcoming Events
            </h2>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-amber-600">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Leadership Training
                    </h3>
                    <p className="text-gray-600">
                      Developing Christian leaders for tomorrow
                    </p>
                  </div>
                  <div className="mt-2 md:mt-0 text-sm text-gray-500">
                    <div>June 28, 2025</div>
                    <div>11:00 AM</div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-amber-600">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      12 Hours Program
                    </h3>
                    <p className="text-gray-600">Rivival Of Fire & Word</p>
                  </div>
                  <div className="mt-2 md:mt-0 text-sm text-gray-500">
                    <div>October 17, 2025</div>
                    <div>5:00 PM - 5:00 AM</div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-amber-600">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Handling Over Service
                    </h3>
                    <p className="text-gray-600">
                      Passing the bating to the next generation
                    </p>
                  </div>
                  <div className="mt-2 md:mt-0 text-sm text-gray-500">
                    <div>October 19, 2025</div>
                    <div>Sunday 8:00 AM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
