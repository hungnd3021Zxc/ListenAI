'use client';
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Globe, Volume2, Upload } from "lucide-react";

export default function ListenAIClone() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Thư viện của tôi</h1>
        <div className="flex gap-2 items-center">
          <Avatar>
            <AvatarImage src="https://via.placeholder.com/40" />
          </Avatar>
          <Button variant="outline">Đăng xuất</Button>
        </div>
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">Tất cả</TabsTrigger>
          <TabsTrigger value="continue">Tiếp tục</TabsTrigger>
          <TabsTrigger value="done">Đã hoàn thành</TabsTrigger>
          <TabsTrigger value="favorites">Yêu thích</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <ScrollArea className="h-[300px]">
            {Array.from({ length: 5 }).map((_, i) => (
              <Card key={i} className="mb-2">
                <CardContent className="flex justify-between items-center p-4">
                  <div>
                    <p className="font-semibold">Tệp {i + 1}</p>
                    <p className="text-sm text-gray-500">3 giây - Văn bản</p>
                  </div>
                  <Button variant="ghost">...</Button>
                </CardContent>
              </Card>
            ))}
          </ScrollArea>
        </TabsContent>
      </Tabs>

      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-2">Thêm nội dung</h2>
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "Tài liệu", icon: Upload },
            { label: "Quét văn bản", icon: Volume2 },
            { label: "Liên kết Web", icon: Globe },
            { label: "Gõ hoặc dán văn bản", icon: Volume2 },
          ].map(({ label, icon: Icon }, i) => (
            <Card key={i} className="hover:shadow-xl cursor-pointer">
              <CardContent className="flex items-center gap-3 p-4">
                <Icon className="text-yellow-500" />
                <p>{label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-2">Cài đặt</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label>Thay đổi giọng nói</Label>
            <select className="border rounded px-2 py-1">
              <option>Emery</option>
              <option>Mai</option>
              <option>Anna</option>
            </select>
          </div>

          <div className="flex items-center justify-between">
            <Label>Ngôn ngữ ứng dụng</Label>
            <select className="border rounded px-2 py-1">
              <option>Vietnamese</option>
              <option>English</option>
            </select>
          </div>

          <div className="flex items-center justify-between">
            <Label>Chế độ tối</Label>
            <Switch />
          </div>
        </div>
      </div>
    </div>
  );
}