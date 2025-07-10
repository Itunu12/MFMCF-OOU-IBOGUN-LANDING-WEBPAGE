import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Users,
  Heart,
  BookOpen,
  Star,
  ArrowRight,
  Sparkles,
  Trophy,
} from "lucide-react";
// @ts-ignore
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900">
          <div className="absolute inset-0 bg-hero-pattern opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-400/20 rounded-full blur-xl animate-float"></div>
        <div
          className="absolute top-40 right-20 w-32 h-32 bg-pink-400/20 rounded-full blur-xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-20 left-20 w-24 h-24 bg-purple-300/20 rounded-full blur-xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
          <div className="animate-fade-in">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30 transition-all duration-300">
              <Sparkles className="w-4 h-4 mr-2" />
              Welcome to Our Spiritual Family
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-white via-purple-100 to-pink-100 bg-clip-text text-transparent">
              MFMCF OOU Ibogun
            </h1>
            <p className="text-2xl md:text-3xl mb-4 opacity-90 font-light">
              Mountain of Fire and Miracles Campus Fellowship
            </p>
            <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto opacity-80 leading-relaxed">
              A vibrant community where students gather to worship, grow in
              faith, and build lasting relationships in Christ. Join us on this
              incredible journey of spiritual transformation and academic
              excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/join">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 group"
                >
                  Join Our Fellowship
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/50 text-black hover:bg-white hover:text-purple-900 px-8 py-4 text-lg font-semibold backdrop-blur-sm transition-all duration-300"
                >
                  Discover Our Story
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-pink-50 opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200">
              Our Impact
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Transforming Lives Through Faith
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Users,
                number: "50+",
                label: "Active Members",
                color: "purple",
              },
              {
                icon: BookOpen,
                number: "10+",
                label: "Bible Studies",
                color: "pink",
              },
              {
                icon: Heart,
                number: "500+",
                label: "Lives Touched",
                color: "purple",
              },
              {
                icon: Trophy,
                number: "15+",
                label: "Years of Ministry",
                color: "pink",
              },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${
                    stat.color === "purple"
                      ? "from-purple-500 to-purple-700"
                      : "from-pink-500 to-pink-700"
                  } flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200">
              Why Choose Us
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your Spiritual Home Awaits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the perfect blend of spiritual growth, academic
              support, and lifelong friendships
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: "🙏",
                title: "Powerful Prayer Life",
                description:
                  "Experience the transformative power of corporate prayer and personal intercession",
                gradient: "from-purple-500 to-purple-700",
              },
              {
                icon: "📖",
                title: "Deep Bible Study",
                description:
                  "Dive deep into God's Word with structured studies and practical applications",
                gradient: "from-pink-500 to-pink-700",
              },
              {
                icon: "🤝",
                title: "Authentic Fellowship",
                description:
                  "Build meaningful relationships with fellow believers who share your values",
                gradient: "from-purple-600 to-pink-600",
              },
              {
                icon: "🎓",
                title: "Academic Excellence",
                description:
                  "Receive prayer support and study groups to excel in your academic journey",
                gradient: "from-indigo-500 to-purple-600",
              },
              {
                icon: "🌟",
                title: "Leadership Development",
                description:
                  "Develop your God-given talents and leadership skills through various opportunities",
                gradient: "from-pink-500 to-purple-500",
              },
              {
                icon: "💝",
                title: "Community Impact",
                description:
                  "Make a difference in your campus and community through outreach programs",
                gradient: "from-purple-500 to-indigo-500",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:bg-white hover:-translate-y-2"
              >
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
                  >
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200">
              What's Coming Up
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Join Our Upcoming Events
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: BookOpen,
                title: "Weekly Bible Study",
                time: "Every Tuesday, 5:00 PM",
                description:
                  "Deep dive into God's Word with practical applications for student life",
                color: "purple",
                location: "Fellowship Auditorium",
              },
              {
                icon: BookOpen,
                title: "Weekly Prayer Meeting",
                time: "Every Tuesday, 5:30 PM",
                description:
                  "Intesive prayer charge, fortification with fire and deep comunication with God",
                color: "purple",
                location: "Fellowship Auditorium",
              },
              {
                icon: Users,
                title: "Campus Outreach",
                time: "Every Friday, 4:00 PM",
                description:
                  "Share God's love across campus through evangelism and service",
                color: "pink",
                location: "Campus Grounds",
              },
              {
                icon: Heart,
                title: "Prayer & Worship",
                time: "Every Sunday, 8:00 AM",
                description:
                  "Powerful worship sessions and corporate prayer for breakthrough",
                color: "purple",
                location: "Fellowship Auditorium",
              },
            ].map((event, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-gray-50 hover:-translate-y-2"
              >
                <CardHeader>
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${
                      event.color === "purple"
                        ? "from-purple-500 to-purple-700"
                        : "from-pink-500 to-pink-700"
                    } flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
                  >
                    <event.icon className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors">
                    {event.title}
                  </CardTitle>
                  <CardDescription className="text-purple-600 font-semibold">
                    {event.time}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {event.description}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    {event.location}
                  </div>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-purple-50 group-hover:border-purple-200 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/events">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                View All Events
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              Student Voices
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Lives Transformed by Faith
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Bro. Itunu",
                level: "500L Mechanical engineering",
                quote:
                  "MFMCF has been my spiritual anchor throughout university. The fellowship helped me grow in faith while excelling academically.",
                rating: 5,
              },
              {
                name: "Sis. Oluwanifise",
                level: "200L ",
                quote:
                  "The prayer support and Bible studies here are incredible. I've found my purpose and calling through this fellowship.",
                rating: 4,
              },
              {
                name: "Bro. John",
                level: "400L Mechanical Engineering",
                quote:
                  "From a shy freshman to a confident leader - MFMCF has shaped my character and prepared me for life after graduation.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <CardTitle className="text-lg font-semibold">
                    {testimonial.name}
                  </CardTitle>
                  <CardDescription className="text-purple-200">
                    {testimonial.level}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-white/90 italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <Sparkles className="w-16 h-16 mx-auto mb-6 animate-pulse-glow" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-xl mb-12 opacity-90 leading-relaxed">
              Join hundreds of students who have found their spiritual home at
              MFMCF OOU Ibogun. Your transformation story starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/join">
                <Button
                  size="lg"
                  className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 group"
                >
                  Join Fellowship Today
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-black hover:bg-white hover:text-purple-600 px-8 py-4 text-lg font-semibold transition-all duration-300"
                >
                  Get In Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
